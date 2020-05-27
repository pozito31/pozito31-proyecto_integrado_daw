<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class nuevohermano extends Model
{
    // Nombre de la tabla en MySQL.
    protected $table='nuevohermano';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    protected $primaryKey = 'id_nuevohermano';

      //Atributos que se pueden asignar de manera masiva.
      protected $fillable = array('nombre', 'primerapellido', 'segundoapellido', 'dni', 'correoelectronico', 'telefono');

      //Aqui ponemos los campos que no queremos que se devuelvan en las consultas.
      protected $hidden = ['created_at', 'updated_at'];
}
