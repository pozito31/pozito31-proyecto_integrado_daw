<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidaContacto extends FormRequest
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
            'email' => 'required|string|min:1|max:250',
            'mensaje' => 'required|string|min:1|max:250'
        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'El nombre del contacto es requerido',
            'email.required' => 'El email del contacto es requerido',
            'mensaje.required' => 'El mensaje del contacto es requerido'
        ];
    }
}
