<?php

use Illuminate\Database\Seeder;

//Hace uso del modelo de nuevo hermano.
use App\Nuevohermano;

// Le indicamos que utilice también Faker.
// Información sobre Faker: https://github.com/fzaninotto/Faker
use Faker\Factory as Faker;

class NuevohermanoSeeder extends Seeder
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

         //Creamos un bucle para cubrir 10 nuevos hermanos:
        for ($i=1; $i<=10; $i++){
            //Cuando llamamos al método create del modelo de nuevohermano
            //Se está creando una nueva fila en la tabla.
            Nuevohermano::create(
                [
                    'nombre'=>$faker->name(),
                    'primerapellido'=>$faker->firstName(),
                    'segundoapellido'=>$faker->lastName(),
                    'dni'=>$faker->lastName(),
                    'correoelectronico'=>$faker->email(),
                    'telefono'=>$faker->phoneNumber(),
                    'foto'=>$faker->name()
                ]
            );
        }
    }
}

