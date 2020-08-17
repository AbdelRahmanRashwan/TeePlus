<?php

namespace App\Transformers;

use App\Order;
use League\Fractal\TransformerAbstract;

class OrderTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'status', 'payment_type', 'shipping_price'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'status', 'payment_type', 'shipping_price', 'order_products'
    ];

    /**
     * A Fractal transformer.
     *
     * @param Order $order
     * @return array
     */
    public function transform(Order $order)
    {
        $data = $order->toArray();
        if ($data['status']){
            $status_name = $data['status']['name'];
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
                ||$status_name == 'returned'){
                $this->appendShipping($order, $data);
            }
            $data['total_price_info'] .= "=(".$data['total_price'].") total";

        }
        return $data;
    }

    public function includeStatus(Order $order)
    {
        if ($order->status){
            return $this->item($order->status, new StatusTransformer(), 'no-data');
        }
        return  $this->null();
    }

    public function includePaymentType(Order $order)
    {
        if ($order->paymentType){
            return $this->item($order->paymentType, new PaymentTypeTransformer(), 'no-data');
        }
        return  $this->null();
    }

    public function includeShippingPrice(Order $order)
    {
        if ($order->shippingPrice){
            return $this->item($order->shippingPrice, new ShippingPriceTransformer(), 'no-data');
        }
        return  $this->null();
    }

    public function includeOrderProducts(Order $order)
    {
        return $this->collection($order->orderProducts, new OrderProductTransformer(), 'no-data');
    }

    public function appendProducts($order, &$data)
    {
        $data['total_price'] = 0;
        $data['total_price_info'] = "";
        foreach ($order->orderProducts as $orderProduct){
            if (!$orderProduct->from_restored){
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
        $data['total_price'] += $order->shippingPrice->price +$data['additional_fees'] - $data['discount'];
        $data['total_price_info'] .= "+(".$order->shippingPrice->price.") Shipping Price"
            ." to ".$order->shippingPrice->city->name
            ." with method of ".$order->shippingPrice->shippingMethod->name."<br>";
        $data['total_price_info'] .= "+(".$data['additional_fees'].") additional fees for ".$data['additional_fees_details']."<br>";
        $data['total_price_info'] .= "-(".$data['discount'].") discount<br>";
    }
}
