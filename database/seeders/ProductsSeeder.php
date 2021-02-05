<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('products')->insert([
        'images'=>Str::random(10),
        'product_name'=>Str::random(10),
        'product_category'=>Str::random(15),
        'category_id'=>rand(),
        'seller'=>Str::random(15),
        'product_price'=>rand(),
        'product_id'=>rand()
      ]);
    }
}
