<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Noticias extends Model
{
    //Nombre de la tabla en MySQL
    protected $table='noticias';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    protected $primaryKey = 'id_noticia';

    //Atributos que se pueden asignar de manera masiva.
    protected $fillable = array('descripcion', 'estado', 'directorio_noticia', 'usuarios_id_usuario');

     //Aqui ponemos los campos que no queremos que se devuelvan en las consultas.
     protected $hidden = ['created_at', 'updated_at'];

     //Relación de Noticias con Usuarios:
    public function usuarios()
    {
        return $this->belongsTo('App\Usuarios');
    }

    //Relación de Noticias con Imagenes:
    public function imagenes()
    {
        return $this->hasMany('App\Imagenes');
    }
}
