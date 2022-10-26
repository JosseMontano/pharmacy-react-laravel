<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductoController extends Controller
{
    public function index()
    {
        $products = DB::table('products')->get();
        return response()->json($products, 200);
    }

    public function store(Request $request)
    {
        // 	 	 		
        $request->validate([
            'name_product' => 'required|string',
            'description_product' => 'required|string',
            'price_product' => 'required',
            'amount_product' => 'required|integer'
        ]);

      /*   $nombre_imagen = '';
        if ($file = $request->file("url_foto")) {
            $nombre_imagen = time() . "-" . $file->getClientOriginalName();
            $file->move("imagenes/products", $nombre_imagen);
            $nombre_imagen = '/imagenes/products/' . $nombre_imagen;
        } */

        DB::table('products')->insert([
            'name_product' => "$request->name_product",
            'description_product' => "$request->description_product",
            'price_product' => "$request->price_product",
            'amount_product' => "$request->amount_product",
          /*   'url_foto' => "$nombre_imagen", */
        ]);

        return response()->json(["mensaje" => "se guardo correctamente"], 201);
    }

    public function show($id)
    {
        $products = DB::table('products')->where('id_product', "$id")->get();
        return response()->json($products, 200);
    }
    public function update(Request $request, $id)
    {
        $nombre_imagen = '';
        if ($file = $request->file("url_foto")) {
            $nombre_imagen = time() . "-" . $file->getClientOriginalName();
            $file->move("imagenes/products", $nombre_imagen);
            $nombre_imagen = '/imagenes/products/' . $nombre_imagen;
            //eliminar img de laravel
            $products = DB::table('products')->where('id_product', "$id")->value('url_foto');
            $image_path = public_path() . $products;
            unlink($image_path);

            DB::table('products')->where('id_product', "$id")->update([
                'name_product' => "$request->name_product",
                'description_product' => "$request->description_product",
                'price_product' => "$request->price_product",
                'amount_product' => "$request->amount_product",
                'url_foto' => "$nombre_imagen",
            ]);
        } else {
            $products = DB::table('products')->where('id_product', "$id")->value('url_foto');
            DB::table('products')->where('id_product', "$id")->update([
                'name_product' => "$request->name_product",
                'description_product' => "$request->description_product",
                'price_product' => "$request->price_product",
                'amount_product' => "$request->amount_product",
                'url_foto' => "$products",
            ]);
        }

        return response()->json(["mensaje" => "products Modificada"], 200);
    }

    public function destroy($id)
    {
        //eliminar img de laravel
        
       /*  $products = DB::table('products')->where('id_product', "$id")->value('url_foto');
        $image_path = public_path() . $products;
        unlink($image_path); */

        //elimar fila de la BD
        DB::table('products')->where('id_product', '=', "$id")->delete();
        return response()->json(["mensaje" => "se ha Eliminado"], 200);
    }
}
