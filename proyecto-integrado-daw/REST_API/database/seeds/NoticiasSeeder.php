<?php

use Illuminate\Database\Seeder;

//Hace uso del modelo de Usuarios.
use App\Usuarios;

//Hace uso del modelo de Noticias.
use App\Noticias;

// Le indicamos que utilice también Faker.
// Información sobre Faker: https://github.com/fzaninotto/Faker
use Faker\Factory as Faker;

class NoticiasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Creamos una instancia de Faker
        $faker = Faker::create();

        //Para cubrir las noticias tenemos que tener en cuenta que usuarios tenemos.
        //Para que la clave foránea no nos de problemas.
        //Averiguamos cuantos usuarios hay en la tabla.
        $cuantos= Usuarios::all()->count();

         //Creamos un bucle para cubrir 10 noticias:
         for ($i=1; $i<=10; $i++){
            //Cuando llamamos al método create del modelo de Noticias
            //Se está creando una nueva fila en la tabla.
            Noticias::create(
                [
                    'descripcion'=>$faker->name(),
                    'estado'=>$faker->firstName(),
                    'directorio_noticia'=>$faker->firstName(),
                    'usuarios_id_usuario'=>$faker->numberBetween(1,$cuantos)
                ]
            );
        }
    }
}
