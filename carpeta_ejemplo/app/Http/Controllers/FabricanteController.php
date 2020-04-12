<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Fabricante;

class FabricanteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['status'=>'ok','data'=>Fabricante::all()], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return ("muestra formulario de creación de fabricante");
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
        if (!$request->input('nombre') || !$request->input('direccion') || !$request->input('telefono'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan datos necesarios para el proceso de alta.'])],422);
        }

        // Insertamos una fila en Fabricante con create pasándole todos los datos recibidos.
        // En $request->all() tendremos todos los campos del formulario recibidos.
        $nuevoFabricante=Fabricante::create($request->all());

        // Más información sobre respuestas en http://jsonapi.org/format/
        // Devolvemos el código HTTP 201 Created – [Creada] Respuesta a un POST que resulta en una creación. Debería ser combinado con un encabezado Location, apuntando a la ubicación del nuevo recurso.
        return response()->json(['data'=>$nuevoAvion], 201)->header('Location',  url('/api/v1/').'/aviones/'.$nuevoAvion->serie);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
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
        // Comprobamos si el fabricante que nos están pasando existe o no.
        $fabricante=Fabricante::find($id);

        // Si no existe ese fabricante devolvemos un error.
        if (!$fabricante)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 404.
            // En code podríamos indicar un código de error personalizado de nuestra aplicación si lo deseamos.
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un fabricante con ese código.'])],404);
        }

        // Listado de campos recibidos teóricamente.
        $nombre=$request->input('nombre');
        $direccion=$request->input('direccion');
        $telefono=$request->input('telefono');

        // Necesitamos detectar si estamos recibiendo una petición PUT o PATCH.
        // El método de la petición se sabe a través de $request->method();
        if ($request->method() === 'PATCH')
        {
            // Creamos una bandera para controlar si se ha modificado algún dato en el método PATCH.
            $bandera = false;

            // Actualización parcial de campos.
            if ($nombre)
            {
                $fabricante->nombre = $nombre;
                $bandera=true;
            }

            if ($direccion)
            {
                $fabricante->direccion = $direccion;
                $bandera=true;
            }


            if ($telefono)
            {
                $fabricante->telefono = $telefono;
                $bandera=true;
            }

            if ($bandera)
            {
                // Almacenamos en la base de datos el registro.
                $fabricante->save();
                return response()->json(['status'=>'ok','data'=>$fabricante], 200);
            }
            else
            {
                // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
                // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
                return response()->json(['errors'=>array(['code'=>304,'message'=>'No se ha modificado ningún dato de fabricante.'])],304);
            }
        }


        // Si el método no es PATCH entonces es PUT y tendremos que actualizar todos los datos.
        if (!$nombre || !$direccion || !$telefono)
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['errors'=>array(['code'=>422,'message'=>'Faltan valores para completar el procesamiento.'])],422);
        }

        $fabricante->nombre = $nombre;
        $fabricante->direccion = $direccion;
        $fabricante->telefono = $telefono;

        // Almacenamos en la base de datos el registro.
        $fabricante->save();
        return response()->json(['status'=>'ok','data'=>$fabricante], 200);
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
