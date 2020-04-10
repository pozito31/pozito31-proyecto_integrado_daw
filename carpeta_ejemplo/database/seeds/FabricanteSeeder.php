<?php

use Illuminate\Database\Seeder;

use App\Fabricante;

use Faker\Factory as Faker;

class FabricanteSeeder extends Seeder
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

        // Creamos un bucle para cubrir 5 fabricantes:
        for ($i=1; $i<=5; $i++)
        {
            // Cuando llamamos al método create del Modelo Fabricante
            // se está creando una nueva fila en la tabla.
            Fabricante::create(
                [
                    'nombre'=>$faker->name(),
                    'direccion'=>$faker->streetName(),
                    'telefono'=>$faker->phoneNumber()
                ]
            );
        }
    }
}
