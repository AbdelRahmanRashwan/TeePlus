<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'base_price'];

    protected $hidden = ['pivot'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function image()
    {
        return $this->morphOne(Media::class, 'mediable')->where('relation', 'image');
    }

    public function priceCombinations()
    {
        return $this->belongsToMany(PriceCombination::class, 'product_price_combinations');
    }

    public function sellers()
    {
        return $this->belongsToMany(User::class, 'user_products');
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_products');
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function scopeSeller(Builder $query, $value)
    {
        return $query->whereHas('sellers', function ($query) use ($value){
            return $query->where('users.id', $value);
        });
    }

    public function scopeCategory(Builder $query, $value)
    {
        return $query->where('category_id', $value);
    }
}