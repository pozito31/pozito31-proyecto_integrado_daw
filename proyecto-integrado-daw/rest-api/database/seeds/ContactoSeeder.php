<?php

use Illuminate\Database\Seeder;

//Hace uso del modelo de contacto.
use App\Contacto;

// Le indicamos que utilice también Faker.
// Información sobre Faker: https://github.com/fzaninotto/Faker
use Faker\Factory as Faker;

class ContactoSeeder extends Seeder
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

        //Creamos un bucle para cubrir 10 contactos:
       for ($i=1; $i<=10; $i++){
           //Cuando llamamos al método create del modelo de contacto
           //Se está creando una nueva fila en la tabla.
           Contacto::create(
               [
                   'nombre'=>$faker->name(),
                   'email'=>$faker->email(),
                   'mensaje'=>$faker->lastName()
               ]
           );
       }
    }
}

