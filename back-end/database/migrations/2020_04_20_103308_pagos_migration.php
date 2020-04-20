<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PagosMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pagos', function (Blueprint $table) {
           $table->increments('id_pago');
           $table->string('cantidad');
           $table->string('realizar_pago');
           $table->string('fecha_transaccion');

           //Añadimos la clave foránea con Usuario. usuario_id_usuario
           //Acordarse de añadir al array protected $fillable del fichero de modelo "Pagos.php" la nueva columna:
           //protected $fillable = array('estado', 'tipo', 'nombre', 'situacion', 'usuarios_id_usuario');
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
        Schema::dropIfExists('pagos');
    }
}
