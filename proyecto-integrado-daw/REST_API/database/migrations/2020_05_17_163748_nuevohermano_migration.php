<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class NuevohermanoMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nuevohermano', function (Blueprint $table) {
            $table->increments('id_nuevohermano');
            $table->string('nombre');
            $table->string('primerapellido');
            $table->string('segundoapellido');
            $table->string('dni');
            $table->string('correoelectronico');
            $table->string('telefono');

            // Para que también cree automáticamente los campos timestamps (created_at, updated_at)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nuevohermano');
    }
}
