<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class NoticiasMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('noticias', function (Blueprint $table) {
            $table->increments('id_noticia');
            $table->string('titulo');
            $table->string('descripcion');
            $table->string('texto');
            $table->string('directorio_noticia');
            $table->string('imagen');
            
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
        Schema::dropIfExists('noticias');
    }
}
