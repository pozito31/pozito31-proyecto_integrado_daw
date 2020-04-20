<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pagos extends Model
{
    ////Nombre de la tabla en MySQL
    protected $table='pagos';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    protected $primaryKey = 'id_pago';

    //Atributos que se pueden asignar de manera masiva.
    protected $fillable = array('cantidad', 'realizar_pago', 'fecha_transaccion');

    //Aqui ponemos los campos que no queremos que se devuelvan en las consultas.
    protected $hidden = ['created_at', 'updated_at'];

    //Relación de Pagos con Usuarios:
    public function usuarios()
    {
        return $this->belongsTo('App\Usuarios');
    }
}
