<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ImagenesMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imagenes', function (Blueprint $table) {
            $table->increments('id_imagen');
            $table->string('descripcion');
            $table->string('directorio_foto');

            //Añadimos la clave foránea con Usuario. usuario_id_usuario
           //Acordarse de añadir al array protected $fillable del fichero de modelo "Imagenes.php" la nueva columna:
           //protected $fillable = array('descripcion', 'directorio_foto', 'noticias_id_noticia');
           $table->integer('noticias_id_noticia')->unsigned();

           // Indicamos cual es la clave foránea de esta tabla:
            $table->foreign('noticias_id_noticia')->references('id_noticia')->on('noticias');

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
        Schema::dropIfExists('imagenes');
    }
}
