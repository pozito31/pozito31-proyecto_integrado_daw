<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

// Generalmente cada vez que creamos una clase tenemos que indicar el espacio de nombres
// dónde la estamos creando y suele coincidir con el nombre del directorio.
// El nombre del namespace debe comenzar por UNA LETRA MAYÚSCULA.

// Para más información ver contenido clase Model.php (CTRL + P en Sublime) de Eloquent para ver los atributos disponibles.
// Documentación completa de Eloquent ORM en: https://laravel.com/docs/7.x/eloquent

class Usuarios extends Model
{
    // Nombre de la tabla en MySQL.
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
}
