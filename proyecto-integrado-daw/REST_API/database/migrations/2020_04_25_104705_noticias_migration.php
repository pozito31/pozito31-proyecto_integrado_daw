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
            $table->string('descripcion');
            $table->string('estado');
            $table->string('directorio_noticia');
 
             //Añadimos la clave foránea con Usuario. usuario_id_usuario
            //Acordarse de añadir al array protected $fillable del fichero de modelo "Noticias.php" la nueva columna:
            //protected $fillable = array('descripcion', 'directorio_noticia', 'usuarios_id_usuario');
             $table->integer('usuarios_id_usuario')->unsigned();
 
            // Indicamos cual es la clave foránea de esta tabla:
             $table->foreign('usuarios_id_usuario')->references('id_usuario')->on('usuarios');
 
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
