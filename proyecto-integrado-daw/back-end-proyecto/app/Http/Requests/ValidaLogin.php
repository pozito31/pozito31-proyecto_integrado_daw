<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidaLogin extends FormRequest
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
            'usuario' => 'required|string|min:1|max:250',
            'password' => 'required|string|min:1|max:250'
        ];
    }
    public function messages()
    {
        return [
            'usuario.required' => 'Nombre de Usuario Requerido',
            'password.required' => 'Password de Usuario Requerido'
        ];
    }
}
