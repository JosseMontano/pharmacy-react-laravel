<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


use Barryvdh\DomPDF\Facade\Pdf;


class DoctorController extends Controller
{
    public function index()
    {
        $show_doctor = DB::select("select d.id_doctor, d.date_start_doctor, d.payment_doctor, d.photo_doctor , p.name_person, p.last_name_person, p.ci_person, s.name_speciallity
       from doctor d, people p, speciallity s where d.id_person = p.id_person and d.id_speciality = s.id_speciallity");
        return response()->json($show_doctor, 200);
    }

    public function show($id)
    {
        //get the doctor 
        $doctor = DB::table('doctor')
            ->where('id_doctor', "$id")
            ->first();

        //get the person
        $people = DB::table('people')->where('id_person', "$doctor->id_person")->first();

        //get the speciallity
        $speciallity = DB::table('speciallity')->where('id_speciallity', "$doctor->id_speciality")->first();

        return response()->json([
            compact('doctor') + compact('people') + compact('speciallity')
        ]);
    }
    public function store(Request $request)
    {
        //validacion
        $request->validate([
            'password_user' => 'required|confirmed',
            'name_person' => 'required',
            'last_name_person' => 'required',
            'ci_person' => 'required',
            'date_start_doctor' => 'required',
            'payment_doctor' => 'required',
            'name_user' => 'unique'
        ]);

        //guardar en la tabla persona
        $peronainsertada = DB::table('people')
            ->insert([
                'name_person' => "$request->name_person",
                'last_name_person' => "$request->last_name_person",
                'ci_person' => "$request->ci_person",
            ]);

        //obtener per_id
        $Idpeople = DB::table('people')
            ->where('ci_person', "$request->ci_person")
            ->where('last_name_person', "$request->last_name_person")
            ->first();

        //guardar en la tabla doctor 

        $nombre_imagen = '';
        if ($file = $request->file("photo_doctor")) {
            $nombre_imagen = time() . "-" . $file->getClientOriginalName();
            $file->move("imagenes/doctors", $nombre_imagen);
            $nombre_imagen = '/imagenes/doctors/' . $nombre_imagen;
        }

        $doctorinsertado = DB::table('doctor')->insert([
            'date_start_doctor' => "$request->date_start_doctor",
            'payment_doctor' => "$request->payment_doctor",
            'id_speciality' => "$request->id_speciality",
            'id_person' => "$Idpeople->id_person",
            'photo_doctor' => "$nombre_imagen",
        ]);

        //insertar datos a ususario
        $usuario = $request->ci_person . $request->name_person;
        $usuario = DB::table('usuario')
            ->insert(
                [
                    'name_user' => $usuario,
                    'password_user' => Hash::make($request->password_user),
                    'id_role' => 2,
                    'id_person' => $Idpeople->id_person,
                ]
            );

        return response()->json(["mensaje" => "doctor registrado correctamente"], 201);
    }


    public function destroy($id)
    {
        //elimar fila de la BD
        DB::table('doctor')->where('id_doctor', '=', "$id")->delete();
        return response()->json(["mensaje" => "se ha Eliminado"], 200);
    }
    //Reportes pdf
    public function indexPdf()
    {
        $show_doctor = DB::select("select d.id_doctor, d.date_start_doctor, d.payment_doctor , p.name_person, 
        p.last_name_person, p.ci_person, s.name_speciallity
        from doctor d, people p, speciallity s where d.id_person = p.id_person and d.id_speciality = s.id_speciallity");
        $pdf = PDF::loadView('doctor', ['show_doctors' => $show_doctor]);
        //return $pdf->stream();
        return $pdf->download('invoice.pdf');
    }
}
