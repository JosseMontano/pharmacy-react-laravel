<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToDoctorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('doctor', function (Blueprint $table) {
            $table->foreign(['id_speciality'], 'doctor_ibfk_1')->references(['id_speciallity'])->on('speciallity')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['id_person'], 'doctor_ibfk_2')->references(['id_person'])->on('people')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('doctor', function (Blueprint $table) {
            $table->dropForeign('doctor_ibfk_1');
            $table->dropForeign('doctor_ibfk_2');
        });
    }
}
