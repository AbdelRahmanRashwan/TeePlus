<?php

namespace App\Http\Controllers;

use App\DesignPrintPrice;
use App\Http\Requests\OrderRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Invoice;
use App\Order;
use App\OrderProduct;
use App\PaymentType;
use App\PriceCombination;
use App\Product;
use App\RestoredItem;
use App\ShippingPrice;
use App\Status;
use App\Transformers\OrderTransformer;
use App\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Order::class);

        return ApiResponse::fluentIndexRespond(Order::query(), OrderTransformer::class)->execute();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param OrderRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(OrderRequest $request)
    {
        $this->authorize('store', Order::class);

        $data = $request->validated();

        DB::beginTransaction();

        $order = Order::create($data);

        $data['internal_tracking'] = str_slug($request->user()->name).'-'.$order->id;

        $order->update($data);

        Status::where('name', 'pending')->first()->orders()->save($order);
        $request->user()->orders()->save($order);
        PaymentType::where('name', 'cash')->first()->orders()->save($order);
        ShippingPrice::find($data['shipping_price_id'])->orders()->save($order);

        foreach (json_decode($data['orderProducts']) as $data){
            if (isset($data->id)){
                RestoredItem::find($data->id)->delete();
                $data->from_restored = 1;
            }
            else{
                $data->from_restored = 0;
            }
            $order_product = OrderProduct::create([
                'quantity' => $data->quantity,
                'from_restored' => $data->from_restored,
            ]);
            $product = Product::find($data->product_id);

            if (!$order_product->from_restored && $product->quantity - $product->sold() < $data->quantity){
                DB::rollBack();

                return ApiResponse::setMessage('The given data was invalid.')->setErrors([
                    "product" => [
                        "the amount chosen for product '$product->name' is greater than our stock"
                    ]
                ])->setStatusCode(422)->execute();
            }
            $product->orderProducts()->save($order_product);
            PriceCombination::find($data->price_combination_id)->orderProducts()->save($order_product);
            DesignPrintPrice::find($data->design_print_price_id)->orderProducts()->save($order_product);
            $order->orderProducts()->save($order_product);
        }

        DB::commit();

        $order->load('status', 'paymentType', 'shippingPrice');

        return ApiResponse::createRespond($order, OrderTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Order $order)
    {
        $this->authorize('show', Order::class);

        $order->load(['orderProducts', 'orderProducts.product.category']);

        return ApiResponse::showRespond($order, OrderTransformer::class, ['order_products'])->execute();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param OrderRequest $request
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(OrderRequest $request, Order $order)
    {
        $this->authorize('update', Order::class);

        $data = $request->validated();

        if (array_key_exists('status_id', $data)){
            $status = Status::find($data['status_id']);
            $this->calculateTotalPrice($order, $data, $status->name);
        }

        $order->update($data);

        if (array_key_exists('status_id', $data)){
            $status = Status::find($data['status_id']);
            $status->orders()->save($order);
            if ($status->name == 'canceled after printing' || $status->name == 'returned'){
                $transformed_order = fractal($order, new OrderTransformer())->toArray()['data'];
                $invoice = Invoice::create([
                    'amount' => -1 * $transformed_order['total_price'],
                    'description' => $transformed_order['total_price_info']
                ]);
                $order->invoice()->save($invoice);
                $order->seller->invoices()->save($invoice);
            }
            else if ($status->name == 'delivered'){
                $invoice = Invoice::create([
                    'amount' => $order->additional_fees-$order->discount,
                    'description' => "for delivered items you get the additional fees($order->additional_fees) - discount($order->discount) = "
                        .((int)$order->additional_fees-(int)$order->discount)
                ]);
                $order->invoice()->save($invoice);
                $order->seller->invoices()->save($invoice);
            }
        }

        if (array_key_exists('shipping_price_id', $data)){
            ShippingPrice::find($data['shipping_price_id'])->orders()->save($order);
        }

        $order->load('status', 'shippingPrice');

        return ApiResponse::updateRespond($order, OrderTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(Order $order)
    {
        $this->authorize('destroy', Order::class);

        $order->delete();

        return ApiResponse::deleteRespond()->execute();
    }

    public function calculateTotalPrice($order, &$data, $status_name)
    {
        if ($status_name == 'pending'
            || $status_name == 'canceled before printing'
        ){
            $data['total_price'] = 0;
            $data['total_price_info'] = "";
        }
        else if($status_name == 'printing'
            || $status_name == 'canceled after printing'
            ||$status_name == 'ready for shipping'
            ||$status_name == 'shipped'
            ||$status_name == 'delivered'
            ||$status_name == 'returned'
        ){
            $this->appendProducts($order, $data);
        }
        if($status_name == 'shipped'
            || $status_name == 'delivered'
            || $status_name == 'ready for shipping'
            ||$status_name == 'returned'){
            $this->appendShipping($order, $data);
        }
        $data['total_price_info'] .= "=(".$data['total_price'].") total";
    }

    public function appendProducts($order, &$data)
    {
        $data['total_price'] = 0;
        $data['total_price_info'] = "";
        foreach ($order->orderProducts as $orderProduct){
            if (!$orderProduct->from_restored && $orderProduct->designPrintPrice && $orderProduct->product && $orderProduct->priceCombination){
                $data['total_price'] += (
                        $orderProduct->designPrintPrice->price
                        + $orderProduct->product->base_price
                        + $orderProduct->priceCombination->price
                    ) * $orderProduct->quantity;
                $data['total_price_info'] .=
                    "+(".(
                        $orderProduct->designPrintPrice->price
                        + $orderProduct->product->base_price
                        + $orderProduct->priceCombination->price
                    )." * ".$orderProduct->quantity.") "
                    .$orderProduct->quantity." items ".$orderProduct->product->name."(".$orderProduct->product->base_price.
                    " with the combination of ".$orderProduct->priceCombination->combination."(".$orderProduct->priceCombination->price.")".
                    " with printing type of "
                    .$orderProduct->designPrintPrice->printCriteria->criteria."(".$orderProduct->designPrintPrice->price.")<br>";
            }
        }
    }

    public function appendShipping($order, &$data)
    {
        $data['total_price'] += $order->shippingPrice->price +$order['additional_fees'] - $order['discount'];
        $data['total_price_info'] .= "+(".$order->shippingPrice->price.") Shipping Price"
            ." to ".$order->shippingPrice->city->name
            ." with method of ".$order->shippingPrice->shippingMethod->name."<br>";
        $data['total_price_info'] .= "+(".$order['additional_fees'].") additional fees for ".$order['additional_fees_details']."<br>";
        $data['total_price_info'] .= "-(".$order['discount'].") discount<br>";
    }
}
