<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

// Cargamos Fabricante por que lo usamos más abajo.
use App\Fabricante;

use Response;

// Activamos el uso de las funciones de caché.
use Illuminate\Support\Facades\Cache;

class FabricanteController extends Controller
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
    public function index()
    {
		// return "En el index de Fabricante.";
		// Devolvemos un JSON con todos los fabricantes.
		// return Fabricante::all();

		// Caché se actualizará con nuevos datos cada 15 segundos.
		// cachefabricantes es la clave con la que se almacenarán 
		// los registros obtenidos de Fabricante::all()
		// El segundo parámetro son los minutos.
		$fabricantes=Cache::remember('cachefabricantes',15/60,function()
		{
			// Para la paginación en Laravel se usa "Paginator"
			// En lugar de devolver 
			// return Fabricante::all();
			// devolveremos return Fabricante::paginate();
			// 
			// Este método paginate() está orientado a interfaces gráficas. 
			// Paginator tiene un método llamado render() que permite construir
			// los enlaces a página siguiente, anterior, etc..
			// Para la API RESTFUL usaremos un método más sencillo llamado simplePaginate() que
			// aporta la misma funcionalidad
			return Fabricante::simplePaginate(10);  // Paginamos cada 10 elementos.

		});

		// Para devolver un JSON con código de respuesta HTTP sin caché.
		// return response()->json(['status'=>'ok', 'data'=>Fabricante::all()],200);

		// Devolvemos el JSON usando caché.
		// return response()->json(['status'=>'ok', 'data'=>$fabricantes],200);
		 
		// Con la paginación lo haremos de la siguiente forma:
		// Devolviendo también la URL a l
		return response()->json(['status'=>'ok', 'siguiente'=>$fabricantes->nextPageUrl(),'anterior'=>$fabricantes->previousPageUrl(),'data'=>$fabricantes->items()],200);
	}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		// Método llamado al hacer un POST.
		// Comprobamos que recibimos todos los campos.
		if (!$request->input('nombre') || !$request->input('direccion') || !$request->input('telefono'))
		{
			// NO estamos recibiendo los campos necesarios. Devolvemos error.
			return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan datos necesarios para procesar el alta.'])],422);
		}

		// Insertamos los datos recibidos en la tabla.
		$nuevoFabricante=Fabricante::create($request->all());

		// Devolvemos la respuesta Http 201 (Created) + los datos del nuevo fabricante + una cabecera de Location + cabecera JSON
		$respuesta= Response::make(json_encode(['data'=>$nuevoFabricante]),201)->header('Location','http://www.dominio.local/fabricantes/'.$nuevoFabricante->id)->header('Content-Type','application/json');
		return $respuesta;
	}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		// Corresponde con la ruta /fabricantes/{fabricante}
		// Buscamos un fabricante por el ID.
		$fabricante=Fabricante::find($id);

		// Chequeamos si encontró o no el fabricante
		if (! $fabricante)
		{
			// Se devuelve un array errors con los errores detectados y código 404
			return response()->json(['errors'=>Array(['code'=>404,'message'=>'No se encuentra un fabricante con ese código.'])],404);
		}

		// Devolvemos la información encontrada.
		return response()->json(['status'=>'ok','data'=>$fabricante],200);

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
		// Vamos a actualizar un fabricante.
		// Comprobamos si el fabricante existe. En otro caso devolvemos error.
		$fabricante=Fabricante::find($id);

		// Si no existe mostramos error.
		if (! $fabricante)
		{
			// Devolvemos error 404.
			return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un fabricante con ese código.'])],404);
		}

		// Almacenamos en variables para facilitar el uso, los campos recibidos.
		$nombre=$request->input('nombre');
		$direccion=$request->input('direccion');
		$telefono=$request->input('telefono');

		// Comprobamos si recibimos petición PATCH(parcial) o PUT (Total)
		if ($request->method()=='PATCH')
		{
			$bandera=false;

			// Actualización parcial de datos.
			if ($nombre !=null && $nombre!='')
			{
				$fabricante->nombre=$nombre;
				$bandera=true;
			}

			// Actualización parcial de datos.
			if ($direccion !=null && $direccion!='')
			{
				$fabricante->direccion=$direccion;
				$bandera=true;
			}

			// Actualización parcial de datos.
			if ($telefono !=null && $telefono!='')
			{
				$fabricante->telefono=$telefono;
				$bandera=true;
			}

			if ($bandera)
			{
				// Grabamos el fabricante.
				$fabricante->save();

				// Devolvemos un código 200.
				return response()->json(['status'=>'ok','data'=>$fabricante],200);
			}
			else
			{
				// Devolvemos un código 304 Not Modified.
				return response()->json(['errors'=>array(['code'=>304,'message'=>'No se ha modificado ningún dato del fabricante.'])],304);
			}
		}


		// Método PUT actualizamos todos los campos.
		// Comprobamos que recibimos todos.
		if (!$nombre || !$direccion || !$telefono)
		{
			// Se devuelve código 422 Unprocessable Entity.
			return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan valores para completar el procesamiento.'])],422);
		}

		// Actualizamos los 3 campos:
		$fabricante->nombre=$nombre;
		$fabricante->direccion=$direccion;
		$fabricante->telefono=$telefono;

		// Grabamos el fabricante
		$fabricante->save();
		return response()->json(['status'=>'ok','data'=>$fabricante],200);

	}


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		// Borrado de un fabricante.
		// Ejemplo: /fabricantes/89 por DELETE
		// Comprobamos si el fabricante existe o no.
		$fabricante=Fabricante::find($id);

		if (! $fabricante)
		{
			// Devolvemos error codigo http 404
			return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra el fabricante con ese código.'])],404);
		}

		// Borramos el fabricante y devolvemos código 204
		// 204 significa "No Content".
		// Este código no muestra texto en el body.
		// Si quisiéramos ver el mensaje devolveríamos
		// un código 200.
		// Antes de borrarlo comprobamos si tiene aviones y si es así
		// sacamos un mensaje de error.
		// $aviones = $fabricante->aviones()->get();
		$aviones = $fabricante->aviones;

		if (sizeof($aviones) >0)
		{
			// Si quisiéramos borrar todos los aviones del fabricante sería:
			// $fabricante->aviones->delete();

			// Devolvemos un código 409 Conflict. 
			return response()->json(['errors'=>array(['code'=>409,'message'=>'Este fabricante posee aviones y no puede ser eliminado.'])],409);
		}

		// Eliminamos el fabricante si no tiene aviones.
		$fabricante->delete();

		// Se devuelve código 204 No Content.
		return response()->json(['code'=>204,'message'=>'Se ha eliminado correctamente el fabricante.'],204);
	}
}
