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

Route::prefix('v1')->group(function () {

    // resource recibe nos parámetros(URI del recurso, Controlador que gestionará las peticiones)
    Route::resource('usuarios','UsuariosController',['except'=>['edit','create'] ]);   // Todos los métodos menos Edit que mostraría un formulario de edición.
    Route::resource('noticias','NoticiasController',['except'=>['edit','create'] ]);   // Todos los métodos menos Edit que mostraría un formulario de edición.

    // Si queremos dar  la funcionalidad de ver todos los pagos tendremos que crear una ruta específica.
    // Pero de pagos solamente necesitamos solamente los métodos index y show.
    // Lo correcto sería hacerlo así:
    Route::resource('pagos','PagosController',[ 'only'=>['index','show'] ]);

    // Si queremos dar  la funcionalidad de ver todos los roles tendremos que crear una ruta específica.
    // Pero de roles solamente necesitamos solamente los métodos index y show.
    // Lo correcto sería hacerlo así:
    Route::resource('roles','RolesController',[ 'only'=>['index','show'] ]);

    // Si queremos dar  la funcionalidad de ver todos las noticias tendremos que crear una ruta específica.
    // Pero de noticias solamente necesitamos solamente los métodos index y show.
    // Lo correcto sería hacerlo así:
    Route::resource('noticias','NoticiasController',[ 'only'=>['index','show'] ]);

    // Si queremos dar  la funcionalidad de ver todos las imagenes tendremos que crear una ruta específica.
    // Pero de imagenes solamente necesitamos solamente los métodos index y show.
    // Lo correcto sería hacerlo así:
    Route::resource('imagenes','ImagenesController',[ 'only'=>['index','show'] ]);

});
