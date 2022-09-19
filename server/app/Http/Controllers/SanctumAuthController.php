<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class SanctumAuthController extends Controller
{
    public function registropaciente(Request $request)
    {
        //validacion
        $request->validate([
            'password_user' => 'required|confirmed',
            'name_person' => 'required',
            'last_name_person' => 'required',
            'ci_person' => 'required',
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

        //insertar datos a ususario
        $usuario = $request->ci_person . $request->name_person;
        $usuario = DB::table('usuario')
            ->insert(
                [
                    'name_user' => $usuario,
                    'password_user' => Hash::make($request->password_user),
                    'id_role' => 1,
                    'id_person' => $Idpeople->id_person,
                ]
            );

        return response()->json(["mensaje" => "usuario registrado correctamente"], 201);
    }

    public function login(Request $request)
    {
        //validacion
        $request->validate([
            'name_user' => 'required',
            'password_user' => 'required',
        ]);

        $user = User::where("name_user", "=", $request->name_user)->first();
        if (isset($user)) {
            if (Hash::check($request->password_user, $user->password_user)) {
                $token = $user->createToken("auth_token")->plainTextToken;
                return response()->json(["mensaje" => "se inicio sesion", "acess_token" => $token, "name_user" => $request->name_user, "id_role" => $user->id_role]);
            } else {
                return response()->json(["mensaje" => "contraseña incorrecta", "error" => true], 200);
            }
        } else {
            return response()->json(["mensaje" => "usuario no existe", "error" => true], 200);
        }
    }

    public function perfil($name_user)
    {
        $user = DB::table('usuario')
        ->select(['id_role', 'id_person', 'name_user'])
        ->where('name_user', "$name_user")->first();
        $people = DB::table('people')->where('id_person', "$user->id_person")->get();
        $role = DB::table('role')
        ->select(['name_role'])
        ->where('id_role', "$user->id_role")->first();
        if (isset($user)) {
            return response()->json([compact('user')+compact('people')+compact('role')]);
        } else {
            return response()->json(["mensaje" => "usuario no existe", "error" => true], 200);
        }
    }

    public function updateUser($name_user, Request $request)
    {
        $user = DB::table('usuario')
        ->select(['id_role', 'id_person', 'name_user'])
        ->where('name_user', "$name_user")->first();
        $people = DB::table('people')->where('id_person', "$user->id_person")->update([
            'name_person'=> "$request->name_person",
            "last_name_person"=> "$request->last_name_person",
            "ci_person"=> "$request->ci_person"
        ]);  
        $people = DB::table('usuario')->where('id_person', "$user->id_person")->update([
            'name_user'=> $request->ci_person . $request->name_person,
        ]);    
        return response()->json(["status" => 1, "mensaje" => "actualizated success"]);
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
        return response()->json(["status" => 1, "mensaje" => "se cerro correctamente"]);
    }
}
