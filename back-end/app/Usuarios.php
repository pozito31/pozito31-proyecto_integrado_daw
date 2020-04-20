<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
    //Nombre de la tabla en MySQL
    protected $table='usuarios';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    protected $primaryKey = 'id_usuario';

    //Atributos que se pueden asignar de manera masiva.
    protected $fillable = array('nombre', 'apellidos', 'fecha_alta', 'usuario', 'password');

    //Aqui ponemos los campos que no queremos que se devuelvan en las consultas.
    protected $hidden = ['created_at', 'updated_at'];

    //Relación de Usuarios con Pagos:
    public function pagos()
    {
        return $this->hasMany('App\Pagos');
    }

    //Relación de Usuarios con Roles:
    public function roles()
    {
        return $this->hasMany('App\Roles');
    }

     //Relación de Usuarios con Noticias:
     public function noticias()
     {
         return $this->hasMany('App\Noticias');
     }

      //Relación de Usuarios con imagenes:
      public function imagenes()
      {
          return $this->hasMany('App\imagenes');
      }
}
