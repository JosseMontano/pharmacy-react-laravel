<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoleOperationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_operations', function (Blueprint $table) {
            $table->integer('id_role_operation', true);
            $table->integer('id_role');
            $table->integer('id_operation')->index('id_operation');

            $table->index(['id_role', 'id_operation'], 'id_role');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_operations');
    }
}
