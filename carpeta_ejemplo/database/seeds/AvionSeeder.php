<?php

use Illuminate\Database\Seeder;

// Hace uso del modelo de Fabricante.
use App\Fabricante;

// Hace uso del modelo de Avion.
use App\Avion;

// Le indicamos que utilice también Faker.
// Información sobre Faker: https://github.com/fzaninotto/Faker
use Faker\Factory as Faker;

class AvionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Creamos una instancia de Faker
       $faker = Faker::create();

       // Para cubrir los aviones tenemos que tener en cuenta qué fabricantes tenemos.
       // Para que la clave foránea no nos de problemas.
       // Averiguamos cuantos fabricantes hay en la tabla.
       $cuantos= Fabricante::all()->count();

       // Creamos un bucle para cubrir 20 aviones:
       for ($i=1; $i<=20; $i++)
       {
           // Cuando llamamos al método create del Modelo Avion
           // se está creando una nueva fila en la tabla.
           Avion::create(
               [
                'modelo'=>$faker->word(),
                'longitud'=>$faker->randomFloat(2,10,150),
                'capacidad'=>$faker->randomNumber(3),  // de 3 dígitos como máximo.
                'velocidad'=>$faker->randomNumber(4),  // de 4 dígitos como máximo.
                'alcance'=>$faker->randomNumber(),
                'fabricante_id'=>$faker->numberBetween(1,$cuantos)
               ]
           );
       }

    }
}
