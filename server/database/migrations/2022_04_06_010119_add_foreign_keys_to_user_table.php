<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user', function (Blueprint $table) {
            $table->foreign(['id_role'], 'user_ibfk_1')->references(['id_role'])->on('role')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['id_person'], 'user_ibfk_2')->references(['id_person'])->on('people')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user', function (Blueprint $table) {
            $table->dropForeign('user_ibfk_1');
            $table->dropForeign('user_ibfk_2');
        });
    }
}
