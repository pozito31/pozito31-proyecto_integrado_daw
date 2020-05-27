<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidaNoticias extends FormRequest
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
            'titulo' => 'required|string|min:1|max:250',
            'descripcion' => 'required|string|min:1|max:250',
            'texto' => 'required|string|min:1|max:250',
            'imagen' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'titulo.required' => 'El titulo de la noticia es requerido',
            'descripcion.required' => 'La descripcion de la noticia es requerida',
            'texto.required' => 'El texto de la noticia es requerido',
            'imagen.required' => 'La imagen de la noticia es requerida'
        ];
    }
}
