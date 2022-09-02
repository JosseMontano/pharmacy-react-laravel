<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HourController extends Controller
{
    //solda da el index, me quede en el store
    public function index()
    {
        $show_doctor = DB::select("SELECT id_hour, day_attention_hour,
        hour_start_hour, hour_finished_hour, name_speciallity,
        name_person, last_name_person
        FROM hours h, doctor d, speciallity s, hours p where h.id_doctor=d.id_doctor and s.id_speciallity = d.id_doctor and d.id_person = p.id_person");
        return response()->json($show_doctor, 200);
    }
    public function store(Request $request)
    {
       //validacion
       $request->validate([
        'day_attention_hour' => 'required|confirmed',
        'hour_start_hour' => 'required',
        'hour_finished_hour' => 'required',
        'ci_person' => 'required',
        'date_start_doctor' => 'required',
        'payment_doctor'=> 'required'
    ]);

    //obtener per_id
    $Idhours = DB::table('hours')
        ->where('ci_person', "$request->ci_person")
        ->where('last_name_person', "$request->last_name_person")
        ->first();

    //guardar en la tabla doctor 
    
    $doctorinsertado = DB::table('doctor')->insert([
        'date_start_doctor' => "$request->date_start_doctor",
        'payment_doctor' => "$request->payment_doctor",
        'id_speciality' => "$request->id_speciality",
        'id_person' => "$Idhours->id_person",
    ]);


    return response()->json(["mensaje" => "doctor registrado correctamente"], 201);

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
  
}
