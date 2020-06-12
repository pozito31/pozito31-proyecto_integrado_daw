<?php

use Illuminate\Database\Seeder;

use App\Usuarios;

use Faker\Factory as Faker;

class UsuariosSeeder extends Seeder
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

        //Creamos un bucle para cubrir 5 usuarios:
        for ($i=1; $i<=5; $i++){
            //Cuando llamamos al método create del Modelo Usuarios
            //se está creando una nueva fila en la tabla
            Usuarios::create(
                [
                    'nombre'=>$faker->name(),
                    'apellidos'=>$faker->lastname(),
                    'fecha_alta'=>$faker->date(),
                    'usuario'=>$faker->userName(),
                    'password'=>$faker->password()
                ]
            );
        }

        if (Usuarios::where('usuario', '=', 'usuario')->first() === null){
            $newUser = Usuarios::create([
                'nombre' => 'usuario',
                'apellidos' => 'usuario',
                'fecha_alta' => '2020-05-18',
                'usuario' => 'usuario',
                'password' => bcrypt('usuario'),
            ]);

            $newUser;
        }

        if (Usuarios::where('usuario', '=', 'administrador')->first() === null){
            $newUser = Usuarios::create([
                'nombre' => 'administrador',
                'apellidos' => 'administrador administrador',
                'fecha_alta' => '2020-05-18',
                'usuario' => 'administrador',
                'password' => bcrypt('administrador'),
            ]);

            $newUser;
        }
    }
}

