<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $usuario = DB::table('usuario')
            ->select(['id'])
            ->where('name_user', "$request->name_user")->first();

        DB::table('carts')->insert([
            'amount_cart' => "$request->amount_cart",
            'id_user' => "$usuario->id",
            'id_product' => "$request->id_product"
        ]);
        return response()->json(["mensaje" => "se guardo correctamente"], 201);
    }

    public function show($name_user)
    {
        //obteniendo los datos de la tabla user
        $user = DB::table('usuario')
            ->select(['name_user', 'id'])
            ->where('name_user', "$name_user")->first();

        $carts = DB::select("SELECT c.id_cart, p.name_product, p.description_product, p.price_product, c.amount_cart
            FROM carts c, products p WHERE c.id_product = p.id_product and id_user='$user->id'");


      /*  $amountToPays = DB::select("SELECT sum(p.price_product) as total
FROM carts c, products p WHERE c.id_product = p.id_product and id_user='$user->id'");*/


$amountToPayGet =0;
foreach ($carts as $cart) {
    $amountToPayGet = ($cart->price_product * $cart->amount_cart) + $amountToPayGet ;
}



        return response()->json([compact('carts') + compact('amountToPayGet')]);
    }


    public function showDetail($name_user)
    {
        //obteniendo los datos de la tabla user
        $user = DB::table('usuario')
            ->select(['name_user', 'id'])
            ->where('name_user', "$name_user")->first();

        $carts = DB::select("SELECT c.id_cart, p.name_product, p.description_product, p.price_product
            FROM carts c, products p WHERE c.id_product = p.id_product and id_user='$user->id'");

        return response()->json([compact('carts')]);
    }

    public function destroy($id)
    {
        //elimar fila de la BD
        DB::table('carts')->where('id_cart', '=', "$id")->delete();
        return response()->json(["mensaje" => "se ha Eliminado"], 200);
    }
}
