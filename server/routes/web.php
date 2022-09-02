<?php

use App\Http\Controllers\SpeciallityController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/speciallity', [SpeciallityController::class, 'indexPdf']);

