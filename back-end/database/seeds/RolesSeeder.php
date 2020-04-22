<?php

use Illuminate\Database\Seeder;

//Hace uso del modelo de Usuarios.
use App\Usuarios;

//Hace uso del modelo de Roles.
use App\Roles;

// Le indicamos que utilice también Faker.
// Información sobre Faker: https://github.com/fzaninotto/Faker
use Faker\Factory as Faker;

class RolesSeeder extends Seeder
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

        //Creamos un bucle para cubrir 5 roles:
        for ($i=0; $i<=20; $i++){
            //Cuando llamamos al método create del modelo de Roles
            //Se está creando una nueva fila en la tabla.
            Roles::create(
                [
                    'estado'=>$faker->firstName(),
                    'tipo'=>$faker->lastName(),
                    'nombre'=>$faker->name(),
                    'situacion'=>$faker->firstName(),
                    'usuarios_id_usuario'=>$faker->numberBetween(1,$cuantos)
                ]
            );
        }
    }
}