<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Versionado de la API.
Route::prefix('v1')->group(function () {

    // resource recibe nos parámetros(URI del recurso, Controlador que gestionará las peticiones)
    Route::resource('fabricantes','FabricanteController',['except'=>['edit','create'] ]);   // Todos los métodos menos Edit que mostraría un formulario de edición.

    // Si queremos dar  la funcionalidad de ver todos los aviones tendremos que crear una ruta específica.
    // Pero de aviones solamente necesitamos solamente los métodos index y show.
    // Lo correcto sería hacerlo así:
    Route::resource('aviones','AvionController',[ 'only'=>['index','show'] ]); // El resto se gestionan en FabricanteAvionController

    // Como la clase principal es fabricantes y un avión no se puede crear si no le indicamos el fabricante,
    // entonces necesitaremos crear lo que se conoce como  "Recurso Anidado" de fabricantes con aviones.
    // Definición del recurso anidado:
    Route::resource('fabricantes.aviones','FabricanteAvionController',[ 'except'=>['show','edit','create'] ]);
});
