<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\HourController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\SanctumAuthController;
use App\Http\Controllers\SpeciallityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("registro", [SanctumAuthController::class, "registropaciente"]);
Route::post("login", [SanctumAuthController::class, "login"]);
Route::get("perfil/{name_user}", [SanctumAuthController::class, "perfil"]);
Route::put("actualizar-usuario/{name_user}", [SanctumAuthController::class, "updateUser"]);

/*Route::middleware('auth:sanctum')->group(function () {
    Route::post("perfil", [SanctumAuthController::class, "perfil"]);
    Route::post("logout", [SanctumAuthController::class, "logout"]);
});*/
//speciallyty
Route::apiResource("especialidad", SpeciallityController::class);
Route::get("especialidad-pdf", [SpeciallityController::class, "indexPdf"]);
//doctor
Route::apiResource("doctor", DoctorController::class);
Route::get("doctor-pdf", [DoctorController::class, "indexPdf"]);
//hour
Route::apiResource("hora", HourController::class);
//producto
Route::apiResource("producto", ProductoController::class);
//cart
Route::apiResource("carrito", CartController::class);
Route::get("carrito-detail/{name_user}", [CartController::class, "showDetail"]);
//order
Route::post("order/{name_user}/{price}", [OrderController::class, "buy"]);
Route::get("order-pdf/{name_user}", [OrderController::class, "indexPdf"]);

