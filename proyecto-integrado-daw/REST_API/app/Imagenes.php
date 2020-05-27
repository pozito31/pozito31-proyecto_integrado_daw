<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagenes extends Model
{
    //Nombre de la tabla en MySQL
    protected $table='imagenes';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
   // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
   protected $primaryKey = 'id_imagen';

   //Atributos que se pueden asignar de manera masiva.
   protected $fillable = array('descripcion', 'directorio_foto', 'noticias_id_noticia');

    //Relación de Imagenes con Noticias:
    public function noticias()
    {
        return $this->belongsTo('App\Noticias');
    }
}
