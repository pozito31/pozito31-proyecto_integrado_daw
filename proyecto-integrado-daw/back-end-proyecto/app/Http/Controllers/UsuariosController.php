<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// Cargamos Usuario por lo que usamos más abajo.
use App\Usuarios;

use Response;

// Activamos el uso de las funciones de caché
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

        // El formato utilizado para las solicitudes de filtrado es /pagos?sort=model,
        // debemos procesar todos los parámetros pasados. El
        if ($request->filled('sort')){
            $CamposOrdenacion = array_filter(explode (',', $request->input('sort','')));
            if (!(empty($CamposOrdenacion))){
                foreach ($CamposOrdenacion as $campo){
                    $sentidoOrdenacion = Str::startsWith($campo,'-')? 'desc' : 'asc';
                    $NombreCampo = ltrim($campo,'-');          
                    $consulta->orderBy($NombreCampo,$sentidoOrdenacion);
                }
            }
        }

        // El formato utilizado para las solicitudes de filtrado es /pagos?filter=model:Falcon
        if ($request->filled('filter')){
            $CamposFiltrados = array_filter(explode (',', $request->input('filter','')));
            foreach ($CamposFiltrados as $campoFiltro){
                [$criterio,$valor] = explode(':',$campoFiltro);

                // La sentencia ->where hace una comparaciónde igualdad con los campos con lo que si
                // queremos una búsqueda por LIKE deberemos personalizarla. En la siguiente
                // instrucción hacemos que podamos buscar por LIKE en el modelo
                if ($criterio=='nombre'){
                    $consulta->where($criterio,'LIKE', '%'.$valor.'%');
                }else{
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
        return ("Muestra formulario de creación de usuarios");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Primero comprobamos si estamos recibiendo todos los campos
        if (!$request->input('id_usuario') || !$request->input('nombre') || !$request->input('apellidos') || !$request->input('fecha_alta') || !$request->input('usuario') || !$request->input('password')){
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan datos necesarios para el proceso de alta.'])],422);
        }

        // Insertamos una fila en Usuarios con create pasándole todos los datos recibidos.
        // En $reques->all() tendremos todos los campos del formulario recibidos.
        $nuevoUsuarios=Usuarios::create($reques->all());

        // Más información sobre respuestas en http://jsonapi.org/format/
        // Devolvemos el código HTTP 201 Created – [Creada] Respuesta a un POST que resulta en una creación. Debería ser combinado con un encabezado Location, apuntando a la ubicación del nuevo recurso.
        return response()->json(['data'=>$nuevoUsuarios], 201)->header('Location',  url('/api/v1/').'/usuarios/'.$nuevoUsuarios->id_usuario);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $usuarios=Usuarios::find($id);

        if (!$usuarios){
             // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un usuario con ese código.'])],404);
        }
        return response()->json(['status'=>'ok','data'=>$usuarios],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
    public function update(Request $request, $id)
    {
        //comprobamos si el usuario que nos están pasando existe o no 
        $usuarios=Usuarios::find($id);

        //Si no existe ese usuario devolvemos un error.
        if (!$usuarios){
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un usuario con ese código.'])],404);
        }

        //Listado de campos recibidos teoricamente
        $id_usuario=$request->input('id_usuario');
        $nombre=$request->input('nombre');
        $apellidos=$request->input('apellidos');
        $fecha_alta=$request->input('fecha_alta');
        $usuario=$request->input('usuario');
        $password=$request->input('password');

        //Necesitamos detectar si estamos recibiendo una petición PUT o PATCH.
        //El metodo de la peticion se sabe a traves de $request->method();
        if ($request->method() === 'PATCH'){
            // Creamos una bandera para controlar si se ha modificado algún dato en el método PATCH.
            $bandera = false;

            //Actualizacion parcial de los campos
            if ($id_usuario){
                $usuarios->id_usuario = $id_usuario;
                $bandera=true;
            }

            if ($nombre){
                $usuarios->nombre = $nombre;
                $bandera=true;
            }

            if ($apellidos){
                $usuarios->apellidos = $apellidos;
                $bandera=true;
            }

            if ($fecha_alta){
                $usuarios->fecha_alta = $fecha_alta;
                $bandera=true;
            }

            if ($usuario){
                $usuarios->usuario = $usuario;
                $bandera=true;
            }

            if ($password){
                $usuarios->password = $password;
                $bandera=true;
            }

            if ($bandera){
                //Almacenamos en la base de datos el registro.
                $usuarios->save();
                return response()->json(['status'=>'ok','data'=>$usuarios], 200);
            }else{
                // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
                // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
                return response()->json(['errors'=>array(['code'=>304,'message'=>'No se ha modificado ningún dato de usuario.'])],304);
            }
        }

        //Si el método no es PATCH entonces es PUT y tendremos que actualizar todos los datos.
        if (!$id_usuario || !$nombre || !$apellidos || !$fecha_alta || !$usuario || !$password){
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan valores para completar el procesamiento.'])],422);
        }

        $usuarios->id_usuario = $id_usuario;
        $usuarios->nombre = $nombre;
        $usuarios->apellidos = $apellidos;
        $usuarios->fecha_alta = $fecha_alta;
        $usuarios->usuario = $usuario;
        $usuarios->password = $password;

        //Almacenamos en la base de datos el registro.
        $usuarios->save();
        return response()->json(['status'=>'ok','data'=>$usuarios], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //Primero eliminaremos todos los pagos de un usuario y luego el usuario en i mismo.
        //Comprobamos si el usuario que nos están pasando existo o no 
        $usuarios=Usuarios::find($id);

        //Si no existe ese usuario devolvemos un error
        if (!$usuarios){
             // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un usuario con ese código.'])],404);
        }

        //El usuario existe entonces buscamos todos los pagos asociados a ese usuario.
        $pagos = $usuarios->$pagos; //Sin paréntesis obtenemos el array de todos los pagos.

        //Comprobamos si tiene pagos ese usuario.
        if (sizeof($pagos) > 0){
             // Devolveremos un código 409 Conflict - [Conflicto] Cuando hay algún conflicto al procesar una petición, por ejemplo en PATCH, POST o DELETE.
             return response()->json(['code'=>409,'message'=>'Este usuario posee pagos y no puede ser eliminado.'],409);
        }

        //Procedemos por lo tanto a eliminar el usuario.
        $usuarios->delete();

        // Se usa el código 204 No Content – [Sin Contenido] Respuesta a una petición exitosa que no devuelve un body (como una petición DELETE)
        // Este código 204 no devuelve body así que si queremos que se vea el mensaje tendríamos que usar un código de respuesta HTTP 200.
        return response()->json(['code'=>204,'message'=>'Se ha eliminado el usuario correctamente.'],204);
    }
}
