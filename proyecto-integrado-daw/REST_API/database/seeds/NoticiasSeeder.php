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

         //Creamos un bucle para cubrir 10 noticias:
         for ($i=1; $i<=10; $i++){
            //Cuando llamamos al método create del modelo de Noticias
            //Se está creando una nueva fila en la tabla.
            Noticias::create(
                [
                    'titulo'=>$faker->name(),
                    'descripcion'=>$faker->name(),
                    'texto'=>$faker->firstName(),
                    'directorio_noticia'=>$faker->firstName(),
                    'imagen'=>$faker->name(),
                ]
            );
        }
    }
}
