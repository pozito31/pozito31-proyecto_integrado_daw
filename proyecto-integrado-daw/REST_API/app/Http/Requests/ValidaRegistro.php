<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidaRegistro extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre' => 'required|string|min:1|max:250',
            'apellidos' => 'required|string|min:1|max:250',
            'usuario' => 'required|string|min:1|max:250',
            'password' => 'required|string|min:1|max:250'
        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'El nombre es Requeido',
            'apellidos.required' => 'Los apellidos son Requeridos',
            'usuario.required' => 'Nombre de Usuario Requerido',
            'password.required' => 'Password de Usuario Requerido'
        ];
    }
}
