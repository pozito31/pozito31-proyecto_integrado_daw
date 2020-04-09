<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

// Cargamos Fabricante por que lo usamos más abajo.
use App\Fabricante;

class FabricanteController extends Controller
{
    public function __construct()
	{
		/*$this->middleware('auth.basic',['only'=>['store','update','destroy']]);*/
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
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

		return response()->json(['status'=>'ok','data'=>Fabricante::all()], 200);
	}
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
		//
		return "Se muestra formulario para crear un fabricante.";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		//
	}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		//
		// return "Se muestra Fabricante con id: $id";
		// Buscamos un fabricante por el id.
		$fabricante=Fabricante::find($id);

		// Si no existe ese fabricante devolvemos un error.
		if (!$fabricante)
		{
			// Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
			// En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
			return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un fabricante con ese código.'])],404);
		}

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
		return "Se muestra formulario para editar Fabricante con id: $id";
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
		//
	}


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		//
	}
}
