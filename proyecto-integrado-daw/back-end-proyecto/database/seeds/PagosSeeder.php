<?php

use Illuminate\Database\Seeder;

//Hace uso del modelo de Usuarios.
use App\Usuarios;

//Hace uso del modelo de Pagos.
use App\Pagos;

// Le indicamos que utilice también Faker.
// Información sobre Faker: https://github.com/fzaninotto/Faker
use Faker\Factory as Faker;

class PagosSeeder extends Seeder
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

        //Para cubrir los pagos tenemos que tener en cuenta que usuarios tenemos.
        //Para que la clave foránea no nos de problemas.
        //Averiguamos cuantos usuarios hay en la tabla.
        $cuantos= Usuarios::all()->count();

        //Creamos un bucle para cubrir 20 pagos:
        for ($i=0; $i<=20; $i++){
            //Cuando llamamos al método create del modelo de Pagos
            //Se está creando una nueva fila en la tabla.
            Pagos::create(
                [
                    'cantidad'=>$faker->randomNumber(3),
                    'realizar_pago'=>$faker->randomNumber(),
                    'fecha_transaccion'=>$faker->date(),
                    'usuarios_id_usuario'=>$faker->numberBetween(1,$cuantos)
                ]
            );
        }
    }
}

