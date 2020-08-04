<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DesignPrintPriceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $segments = request()->segments();
        if (sizeof($segments) == 2){
            return [
                'price' => 'required',
                'print_criteria_id' => 'required|exists:print_criterias,id',
                'design_id' => 'required|exists:designs,id',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'price' => '',
                'print_criteria_id' => 'exists:print_criterias,id',
            ];
        }
    }
}
