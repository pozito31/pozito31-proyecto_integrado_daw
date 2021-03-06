<?php

use Illuminate\Database\Seeder;


//Hace uso del modelo de Imagenes.
use App\Imagenes;

// Le indicamos que utilice también Faker.
// Información sobre Faker: https://github.com/fzaninotto/Faker
use Faker\Factory as Faker;

class ImagenesSeeder extends Seeder
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

        //Creamos un bucle para cubrir 30 noticias:
        for ($i=1; $i<=30; $i++){
            //Cuando llamamos al método create del modelo de Imagenes
            //Se está creando una nueva fila en la tabla.
            Imagenes::create(
                [
                    'descripcion'=>$faker->name(),
                    'directorio_foto'=>$faker->name(),
                ]
            );
        }
    }
}

