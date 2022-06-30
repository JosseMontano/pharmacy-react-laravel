<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToRoleOperationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('role_operations', function (Blueprint $table) {
            $table->foreign(['id_role'], 'role_operations_ibfk_1')->references(['id_role'])->on('role')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['id_operation'], 'role_operations_ibfk_2')->references(['id_operation'])->on('operations')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('role_operations', function (Blueprint $table) {
            $table->dropForeign('role_operations_ibfk_1');
            $table->dropForeign('role_operations_ibfk_2');
        });
    }
}
