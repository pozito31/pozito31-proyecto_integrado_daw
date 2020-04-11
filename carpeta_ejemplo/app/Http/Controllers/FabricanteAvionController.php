<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fabricante;
use App\Avion;

class FabricanteAvionController extends Controller
{
  
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index($idFabricante)
	{
		// Devolverá todos los aviones.
		//return "Mostrando los aviones del fabricante con Id $idFabricante";
		$fabricante=Fabricante::find($idFabricante);

		if (! $fabricante)
		{
			// Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
			// En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
			return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un fabricante con ese código.'])],404);
		}

		return response()->json(['status'=>'ok','data'=>$fabricante->aviones()->get()],200);
		//return response()->json(['status'=>'ok','data'=>$fabricante->aviones],200);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($idFabricante)
	{
		//
		return "Se muestra formulario para crear un avión del fabricante $idFabricante.";
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
	public function show($idFabricante,$idAvion)
	{
		//
		return "Se muestra avión $idAvion del fabricante $idFabricante";
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($idFabricante,$idAvion)
	{
		//
		return "Se muestra formulario para editar el avión $idAvion del fabricante $idFabricante";
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($idFabricante,$idAvion)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($idFabricante,$idAvion)
	{
		//
	}
}
