<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor', function (Blueprint $table) {
            $table->integer('id_doctor');
            $table->integer('date_start_doctor');
            $table->integer('payment_doctor');
            $table->integer('id_speciality');
            $table->integer('id_person')->index('id_person');

            $table->index(['id_speciality', 'id_person'], 'id_speciality');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctor');
    }
}
