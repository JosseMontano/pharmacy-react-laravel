<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTable extends Migration
{
    
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->integer('id_user', true);
            $table->string('name_user', 15);
            $table->string('password_user', 250);
            $table->integer('id_role')->index('id_role');
            $table->integer('id_person')->nullable()->index('id_person');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user');
    }
}
