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
