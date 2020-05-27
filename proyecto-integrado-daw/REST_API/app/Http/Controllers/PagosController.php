<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Pagos;

class PagosController extends Controller
{
    public function __construct()
	{
		//$this->middleware('auth.basic',['only'=>['store','update','destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Devolverá todos los usuarios.
        // return "Mostando todos los usuarios de la base de datos.";
        // return Usuarios::all(); No es lo más correcto por que se devolverían todos los registros. Se recomienda usar Filtros.
         // Se debería devolver un objeto con una propiedad como mínimo data y el array de resultados en esa propiedad.
        // A su vez también es necesario devolver el código HTTP de la respuesta.
        // php http://elbauldelprogramador.com/buenas-practicas-para-el-diseno-de-una-api-RESTful-pragmatica/
        // https://cloud.google.com/storage/docs/json_api/v1/status-codes

        $consulta = Pagos::query();

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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id_usuario)
    {
        //
        // return "Se muestra Usuarios con id: $id_usuario";
        // Buscamos un usuario por el id.
        $pagos=Pagos::find($id_usuario);

        // Si no existe ese avion devolvemos un error.
        if (!$pagos)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un pago con ese código.'])],404);
        }

        return response()->json(['status'=>'ok','data'=>$pagos],200);
    }

    public function store(Request $request)
    {
         // Primero comprobaremos si estamos recibiendo todos los campos.
         if (!$request->input('cantidad') || !$request->input('realizar_pago') || !$request->input('fecha_transaccion') || !$request->input('usuarios_id_usuario'))
         {
             // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan datos necesarios para el proceso de alta.'])],422);
         }

         // Insertamos una fila en usuarios con create pasándole todos los datos recibidos.
         // En $request->all() tendremos todos los campos del formulario recibidos.
         $nuevoPago=Pagos::create($request->all());

         // Más información sobre respuestas en http://jsonapi.org/format/
        // Devolvemos el código HTTP 201 Created – [Creada] Respuesta a un POST que resulta en una creación. Debería ser combinado con un encabezado Location, apuntando a la ubicación del nuevo recurso.
        return response()->json(['data'=>$nuevoPago], 201)->header('Location',  url('/api/').'/pagos/'.$nuevoPago->id_usuario);
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
        // Comprobamos si el usuario que nos están pasando existe o no.
        $pagos=Pagos::find($id_usuario);

        // Si no existe ese usuario devolvemos un error.
        if (!$pagos)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un modelo de pagos con ese código.'])],404);
        }

         // Listado de campos recibidos teóricamente.
         $cantidad=$request->input('cantidad');
         $realizar_pago=$request->input('realizar_pago');
         $fecha_transaccion=$request->input('fecha_transaccion');
         $usuarios_id_usuario=$request->input('usuarios_id_usuario');

         // Necesitamos detectar si estamos recibiendo una petición PUT o PATCH.
        // El método de la petición se sabe a través de $request->method();
        if ($request->method() === 'PATCH')
        {
            // Creamos una bandera para controlar si se ha modificado algún dato en el método PATCH.
            $bandera = false;

            // Actualización parcial de campos.
            if ($cantidad)
            {
                $pagos->cantidad = $cantidad;
                $bandera=true;
            }

            if ($realizar_pago)
            {
                $pagos->realizar_pago = $realizar_pago;
                $bandera=true;
            }

            if ($fecha_transaccion)
            {
                $pagos->fecha_transaccion = $fecha_transaccion;
                $bandera=true;
            }

            if ($usuarios_id_usuario)
            {
                $pagos->usuarios_id_usuario = $usuarios_id_usuario;
                $bandera=true;
            }

            if ($bandera)
            {
                // Almacenamos en la base de datos el registro.
                $pagos->save();
                return response()->json(['status'=>'ok','data'=>$pagos], 200);
            }
            else
            {
                // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
                // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
                return response()->json(['errors'=>array(['code'=>304,'message'=>'No se ha modificado ningún dato de los pagos.'])],304);
            }
        }

         // Si el método no es PATCH entonces es PUT y tendremos que actualizar todos los datos.
         if (!$cantidad || !$realizar_pago || !$fecha_transaccion || !$usuarios_id_usuario)
         {
              // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan valores para completar el procesamiento.'])],422);
         }

         $pagos->cantidad = $cantidad;
         $pagos->realizar_pago = $realizar_pago;
         $pagos->fecha_transaccion = $fecha_transaccion;
         $pagos->usuarios_id_usuario = $usuarios_id_usuario;

         // Almacenamos en la base de datos el registro.
        $pagos->save();
        return response()->json(['status'=>'ok','data'=>$pagos], 200);
    }

    public function destroy($id_usuario)
    {
        // Primero eliminaremos todos los pagos de un usuario y luego el usuario en si mismo.
        // Comprobamos si el usuario que nos están pasando existe o no 
        $pagos=Pagos::find($id_usuario);

        // Si no existe ese usuario devolvemos un error.
        if (!$pagos)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un modelo de pagos con ese código.'])],404);
        }

        // Procedemos por lo tanto a eliminar el usuario.
        $pagos->delete();

        // Se usa el código 204 No Content – [Sin Contenido] Respuesta a una petición exitosa que no devuelve un body (como una petición DELETE)
        // Este código 204 no devuelve body así que si queremos que se vea el mensaje tendríamos que usar un código de respuesta HTTP 200.
        return response()->json(['code'=>204,'message'=>'Se ha eliminado el modelo de pagos correctamente.'],204);
    }
}
