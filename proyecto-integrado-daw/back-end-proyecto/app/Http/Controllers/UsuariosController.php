<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// Cargamos Usuarios porque lo usamos más abajo
use App\Usuarios;

use Response;

//Activamos el uso de las funciones de caché
use Illuminate\Support\Facades\Cache;

class UsuariosController extends Controller
{
    public function __construct()
	{
		$this->middleware('auth.basic',['only'=>['store','update','destroy']]);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $consulta = Usuarios::query();

        // El formato utilizado para las solicitudes de filtrado
        //debemos procesar todos los párametros pasados. El

        if ($request->filled('sort'))
        {
            $CamposOrdenacion = array_filter(explode (',', $request->input('sort','')));

            if (!(empty($CamposOrdenacion)))
            {
                foreach ($CamposOrdenacion as $campo)
                {
                    $sentidoOrdenacion = Str::startsWith($campo,'-')? 'desc' : 'asc';
                    $NombreCampo = ltrim($campo,'-');          
                    $consulta->orderBy($NombreCampo,$sentidoOrdenacion);
                }
            }
        }

        // El formato utilizado para las solicitudes de filtrado es
        if ($request->filled('filter'))
        {
            $CamposFiltrados = array_filter(explode (',', $request->input('filter','')));
            foreach ($CamposFiltrados as $campoFiltro)
            {
                [$criterio,$valor] = explode(':',$campoFiltro);

                // La sentencia ->where hace una comparaciónde igualdad con los campos con lo que si
                // queremos una búsqueda por LIKE deberemos personalizarla. En la siguiente
                // instrucción hacemos que podamos buscar por LIKE en el modelo
                if ($criterio=='nombre')
                {
                    $consulta->where($criterio,'LIKE', '%'.$valor.'%');
                }
                else
                {
                    $consulta->where($criterio, $valor);
                }
            } 
        }
        return response()->json(['status'=>'ok','data'=>$consulta->get()], 200)
                         ->header('X-Saludos-de-JESSICA',1000);  
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return ("muestra formulario de creación de usuarios");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Primero comprobaremos si estamos recibiendo todos los campos.
        if (!$request->input('nombre') || !$request->input('apellidos') || !$request->input('fecha_alta') || !$request->input('usuario') || !$request->input('password'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan datos necesarios para el proceso de alta.'])],422);
        }

        // Insertamos una fila en Fabricante con create pasándole todos los datos recibidos.
        // En $request->all() tendremos todos los campos del formulario recibidos.
        $nuevoUsuario=Usuarios::create($request->all());

        // Más información sobre respuestas en http://jsonapi.org/format/
        // Devolvemos el código HTTP 201 Created – [Creada] Respuesta a un POST que resulta en una creación. Debería ser combinado con un encabezado Location, apuntando a la ubicación del nuevo recurso.
        return response()->json(['data'=>$nuevoUsuario], 201)->header('Location',  url('/api/v1/').'/usuarios/'.$nuevoUsuario->id_usuario);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_usuario)
    {
        $usuario=Usuarios::find($id_usuario);

        // Si no existe ese fabricante devolvemos un error.
        if (!$usuario)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un usuario con ese código.'])],404);
        }

        return response()->json(['status'=>'ok','data'=>$usuario],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id_usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id_usuario)
    {
        //Comprobamos si el usuario que nos están pasando existe o no.
        $usuario=Usuarios::find($id_usuario);

        //Si no existe ese usuario devolvemos un error.
        if (!$usuario)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un usuario con ese código.'])],404);
        }

        // Listado de campos recibidos teóricamente.
        $nombre=$request->input('nombre');
        $apellidos=$request->input('apellidos');
        $fecha_alta=$request->input('fecha_alta');
        $usuario=$request->input('usuario');
        $password=$request->input('password');

        // Necesitamos detectar si estamos recibiendo una petición PUT o PATCH.
        // El método de la petición se sabe a través de $request->method();
        if ($request->method() === 'PATCH')
        {
            // Creamos una bandera para controlar si se ha modificado algún dato en el método PATCH.
            $bandera = false;

            // Actualización parcial de campos.
            if ($nombre)
            {
                $usuario->nombre = $nombre;
                $bandera=true;
            }

            if ($apellidos)
            {
                $usuario->apellidos = $apellidos;
                $bandera=true;
            }

            if ($fecha_alta)
            {
                $usuario->fecha_alta = $fecha_alta;
                $bandera=true;
            }

            if ($usuario)
            {
                $usuario->usuario = $usuario;
                $bandera=true;
            }

            if ($password)
            {
                $usuario->password = $password;
                $bandera=true;
            }

            if ($bandera)
            {
                // Almacenamos en la base de datos el registro.
                $usuario->save();
                return response()->json(['status'=>'ok','data'=>$usuario], 200);
            }
            else
            {
                // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
                // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
                return response()->json(['errors'=>array(['code'=>304,'message'=>'No se ha modificado ningún dato de usuario.'])],304);
            }
        }

        // Si el método no es PATCH entonces es PUT y tendremos que actualizar todos los datos.
        if (!$nombre || !$apellidos || !$fecha_alta || !$usuario || !$password)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan valores para completar el procesamiento.'])],422);
        }

        $usuario->nombre = $nombre;
        $usuario->apellidos = $apellidos;
        $usuario->fecha_alta = $fecha_alta;
        $usuario->usuario = $usuario;
        $usuario->password = $password;

        // Almacenamos en la base de datos el registro.
        $usuario->save();
        return response()->json(['status'=>'ok','data'=>$usuario], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_usuario)
    {
        // Primero eliminaremos todos los aviones de un fabricante y luego el fabricante en si mismo.
        // Comprobamos si el fabricante que nos están pasando existe o no.
        $usuario=Usuarios::find($id_usuario);

        // Si no existe ese fabricante devolvemos un error.
        if (!$usuario)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un usuario con ese código.'])],404);
        }

        // El usuario existe entonces buscamos todos los pagos asociados a ese usuario.
        $pagos = $usuario->pagos; // Sin paréntesis obtenemos el array de todos los pagos.
        $roles = $usuario->roles;
        $noticias = $usuario->noticias;

        // Comprobamos si tiene pagos ese usuario
        if (sizeof($pagos) > 0)
        {
            // Lo correcto en la API REST sería ésto:

            // Devolveremos un código 409 Conflict - [Conflicto] Cuando hay algún conflicto al procesar una petición, por ejemplo en PATCH, POST o DELETE.
            return response()->json(['code'=>409,'message'=>'Este usuario posee pagos y no puede ser eliminado.'],409);
        }

        if (sizeof($roles) > 0)
        {
            // Lo correcto en la API REST sería ésto:

            // Devolveremos un código 409 Conflict - [Conflicto] Cuando hay algún conflicto al procesar una petición, por ejemplo en PATCH, POST o DELETE.
            return response()->json(['code'=>409,'message'=>'Este usuario posee roles y no puede ser eliminado.'],409);
        }

        if (sizeof($noticias) > 0)
        {
            // Lo correcto en la API REST sería ésto:

            // Devolveremos un código 409 Conflict - [Conflicto] Cuando hay algún conflicto al procesar una petición, por ejemplo en PATCH, POST o DELETE.
            return response()->json(['code'=>409,'message'=>'Este usuario posee noticias y no puede ser eliminado.'],409);
        }

        // Procedemos por lo tanto a eliminar el usuario.
        $usuario->delete();

        // Se usa el código 204 No Content – [Sin Contenido] Respuesta a una petición exitosa que no devuelve un body (como una petición DELETE)
        // Este código 204 no devuelve body así que si queremos que se vea el mensaje tendríamos que usar un código de respuesta HTTP 200.
        return response()->json(['code'=>204,'message'=>'Se ha eliminado el usuario correctamente.'],204);
    }
}
