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
            'form_usuario' => 'required|string|min:1|max:250',
            'form_password' => 'required|string|min:1|max:250'
        ];
    }
    public function messages()
    {
        return [
            'form_usuario.required' => 'Nombre de Usuario Requerido',
            'form_password.required' => 'Password de Usuario Requerido'
        ];
    }
}
