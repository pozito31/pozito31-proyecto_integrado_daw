<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call('UsuariosSeeder');
        $this->call('PagosSeeder');
        $this->call('RolesSeeder');
        $this->call('NoticiasSeeder');
        $this->call('ImagenesSeeder');
        $this->call('NuevohermanoSeeder');
        $this->call('ContactoSeeder');
    }
}
