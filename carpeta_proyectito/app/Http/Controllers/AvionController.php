<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

// Necesitaremos el modelo Avion para ciertas tareas.
use App\Avion;

class AvionController extends Controller {
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */

	public function index()
	{
		// Devolverá todos los fabricantes.
		// return "Mostrando todos los fabricantes de la base de datos.";
		// return Fabricante::all();  No es lo más correcto por que se devolverían todos los registros. Se recomienda usar Filtros.
		// Se debería devolver un objeto con una propiedad como mínimo data y el array de resultados en esa propiedad.
		// A su vez también es necesario devolver el código HTTP de la respuesta.
		//php http://elbauldelprogramador.com/buenas-practicas-para-el-diseno-de-una-api-RESTful-pragmatica/
		// https://cloud.google.com/storage/docs/json_api/v1/status-codes

		return response()->json(['status'=>'ok','data'=>Avion::all()], 200);
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
		// return "Se muestra Fabricante con id: $id";
		// Buscamos un fabricante por el id.
		$avion=Avion::find($id);

		// Si no existe ese avion devolvemos un error.
		if (!$avion)
		{
			// Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
			// En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
			return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un avión con ese código.'])],404);
		}

		return response()->json(['status'=>'ok','data'=>$avion],200);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}