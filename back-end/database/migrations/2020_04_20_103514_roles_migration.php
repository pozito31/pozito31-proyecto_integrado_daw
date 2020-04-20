<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RolesMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id_roles');
            $table->string('estado');
            $table->string('tipo');
            $table->string('nombre');
            $table->string('situacion');

            //Añadimos la clave foránea con Usuario. usuario_id_usuario
           //Acordarse de añadir al array protected $fillable del fichero de modelo "Roles.php" la nueva columna:
           //protected $fillable = array('estado', 'tipo', 'nombre', 'situacion', usuarios_id_usuario);
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
        Schema::dropIfExists('roles');
    }
}
