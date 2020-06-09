<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidaNuevoHermano extends FormRequest
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
            'primerapellido' => 'required|string|min:1|max:250',
            'segundoapellido' => 'required|string|min:1|max:250',
            'dni' => 'required|string|min:1|max:250',
            'correoelectronico' => 'required|string|min:1|max:250',
            'telefono' => 'required|string|min:1|max:250',
            'foto' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'nombre.required' => 'El nombre del nuevo hermano es requerido',
            'primerapellido.required' => 'El primer apellido del nuevo hermano es requerido',
            'segundoapellido.required' => 'El segundo apellido del nuevo hermano es requerido',
            'dni' => 'El dni del nuevo hermano es requerido',
            'correoelectronico' => 'El correo electronico del nuevo hermano es requerido',
            'telefono' => 'El telefono del nuevo hermano es requerido',
            'foto' => 'La foto del nuevo hermano es requerida',
        ];
    }
}
