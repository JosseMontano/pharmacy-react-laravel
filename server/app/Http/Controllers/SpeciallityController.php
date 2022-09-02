<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use League\CommonMark\Util\SpecReader;


use Barryvdh\DomPDF\Facade\Pdf;

class SpeciallityController extends Controller
{
    public function index()
    {
        $speciallity = DB::table('speciallity')->get();
        return response()->json($speciallity, 200);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name_speciallity' => 'required',
        ]);

        DB::table('speciallity')->insert([
            'name_speciallity' => "$request->name_speciallity"
        ]);
        return response()->json(["mensaje" => "se guardo correctamente"], 201);
    }
    public function show($id)
    {
     
        $speciallity = DB::table('speciallity')->where('id_speciallity', "$id")->get();
        return response()->json($speciallity, 200);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name_speciallity' => 'required',
        ]);
        
        DB::table('speciallity')->where('id_speciallity', "$id")->update([
            'name_speciallity' => "$request->name_speciallity",
        ]);
        return response()->json(["mensaje" => "especialidad Modificada"], 200);
    }

    public function destroy($id)
    {
        //elimar fila de la BD
        DB::table('speciallity')->where('id_speciallity', '=', "$id")->delete();
        return response()->json(["mensaje" => "se ha Eliminado"], 200);
    }
   
       public function indexPdf()
       {
           $speciallitys = DB::table('speciallity')->get();
           $pdf = PDF::loadView('speciallity',['speciallitys'=>$speciallitys]);
           //return $pdf->stream();
           return $pdf->download('invoice.pdf');
       }

    }
 
