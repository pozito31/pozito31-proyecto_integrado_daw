<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avion extends Model
{
    // Nombre de la tabla en MySQL.
    protected $table='aviones';

    // Eloquent asume que cada tabla tiene una clave primaria con una columna llamada id.
    // Si éste no fuera el caso entonces hay que indicar cuál es nuestra clave primaria en la tabla:
    protected $primaryKey = 'serie';

     /*
    $guarded permite especificar qué campos no queremos que se asignen al modelo. Es decir, se asignan todos excepto los especificados en este array.

    Ejemplo:
    protected $guarded= ['is_admin'];

    Y $fillable te permite especificar qué campos sí quieres que se guarden en la base de datos. Es decir, se asignan únicamente los especificados en este array.

    Ejemplo:
    protected $fillable= ['modelo','longitud','capacidad','velocidad','alcance'];

    Ambas propiedades se usan en los 'asignamientos de datos en masa' en los modelos Eloquent y permiten protegerse en caso de que un usuario 'malicioso' haya modificado los campos del formulario para incluir campos que existen en la tabla pero que no queremos que se cubran automáticamente.

    Estas propiedades te permiten especificar qué datos se asignarán al modelo en los métodos en los que se usan 'asignamientos en masa'.
    Y, por tanto, qué datos se guardarán posteriormente en la base de datos.


    Ambos son excluyentes y, por tanto, deberías utilizar sólo uno de ellos. Si declaras ambos, sólo se tendrá en cuenta el contenido de $fillable.

    La diferencia fundamental entre usar uno u otro, está en cómo Laravel procesa ambas propiedades. Si usamos $fillable, cada vez que modifiquemos un formulario para añadir un nuevo campo, tendremos que añadirlo al array $fillable para que lo procese. Sin embargo, usando $guarded en un modelo, cada campo que añadimos a un formulario es procesado automáticamente e insertado en la Base de Datos. Esto aunque es muy cómodo, tiene varios inconvenientes:

    Si se nos olvida incluir un campo crítico que no debería ser modificado desde el formulario, un usuario malicioso podría aprovechar la vulnerabilidad.
    Si añadimos campos auxiliares del flujo del formulario que no existen en la base de datos, obtendremos un error de SQL porque Eloquent asumirá que existen e intentará asignarles el valor.
    Por tanto, es recomendable utilizar $fillable en lugar de $guarded.

 */
    // Atributos que se pueden asignar de manera masiva.
    protected $fillable = array('modelo','longitud','capacidad','velocidad','alcance');

    // Aquí ponemos los campos que no queremos que se devuelvan en las consultas.
    protected $hidden = ['created_at','updated_at'];

    // Definimos a continuación la relación de esta tabla con otras.
    // Ejemplos de relaciones:
    // 1 usuario tiene 1 teléfono   ->hasOne() Relación 1:1
    // 1 teléfono pertenece a 1 usuario   ->belongsTo() Relación 1:1 inversa a hasOne()
    // 1 post tiene muchos comentarios  -> hasMany() Relación 1:N
    // 1 comentario pertenece a 1 post ->belongsTo() Relación 1:N inversa a hasMany()
    // 1 usuario puede tener muchos roles  ->belongsToMany()
    //  etc..

    // Relación de Avión con Fabricante:
    public function fabricante()
    {
        // 1 avión pertenece a un Fabricante.
        // $this hace referencia al objeto que tengamos en ese momento de Avión.
        return $this->belongsTo('App\Fabricante');
    }

}
