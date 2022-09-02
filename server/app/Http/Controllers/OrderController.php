<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;

use Dotenv\Util\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Nette\Utils\Random;

class OrderController extends Controller
{
    public function buy($name_user, $price)
    {
        //get the details of the products to buy
        $id_usuario = DB::table('usuario')->where('name_user', "$name_user")->first();
        $details = DB::select("SELECT c.amount_cart, group_concat(p.name_product) AS detail FROM carts c, products p WHERE c.id_product=p.id_product and c.id_user='$id_usuario->id' GROUP by 1");

        //convert the vect detail to a string 
        $detailGet = "";
        foreach ($details as $detail) {
            $detailGet = "PRODUCTO: " . $detail->detail . " CANTIDAD: " . $detail->amount_cart . " -" . $detailGet;
        }

        //================== guardar en la tabla orden ==================
        $randomico = uniqid();
        $id_usuario = DB::table('usuario')->where('name_user', "$name_user")->first();
        $orderinsert = DB::table('orders')
            ->insert([
                'code_order' => "$randomico",
                'date_order' => now(),
                'price_order' => "$price",
                'description_order' => "$detailGet",
                'id_user' => "$id_usuario->id",
            ]);

        // ================== update the amount of the products ==================
        //get the products buy
        $detailsproduct = DB::select("SELECT p.id_product, p.amount_product, c.amount_cart FROM carts c, products p WHERE c.id_product=p.id_product and c.id_user = $id_usuario->id");
        foreach ($detailsproduct as $detail) {
            $cant = $detail->amount_product - $detail->amount_cart;
            DB::table('products')->where('id_product', "$detail->id_product")->update([
                'amount_product' => "$cant",
            ]);
        }

        //================== delete of car de la BD ==================
        DB::table('carts')->where('id_user', '=', "$id_usuario->id")->delete();

        return response()->json("La compra de los productos se realizo con exito", 201);
    }




    public function indexPdf($name_user)
    {



        /* $show_order = DB::select("SELECT c.id_cart, p.name_product, p.description_product, p.price_product, c.amount_cart, sum(p.price_product) as total
            FROM carts c, products p WHERE c.id_product = p.id_product and id_user='$user->id'");*/

        $id_usuario = DB::table('usuario')->where('name_user', "$name_user")->first();

        // $show_order = DB::table('orders')->where('id_user', "$id_usuario->id")->get();
        $show_order = DB::select("select * from orders where id_user=$id_usuario->id");

        $pdf = PDF::loadView('order', ['show_order' => $show_order]);
        //return $pdf->stream();
        return $pdf->download('invoice.pdf');
    }
}
