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
            'nacimiento' => 'required|string|min:1|max:250',
            'provincianacimiento' => 'required|string|min:1|max:250',
            'poblacionnacimiento' => 'required|string|min:1|max:250',
            'genero' => 'required',
            'estado' => 'required',
            'presentado1' => 'required|string|min:1|max:250',
            'presentado2' => 'required|string|min:1|max:250',
            'telefonoprincipal' => 'required|string|min:1|max:250',
            'telefonosecundario' => 'required|string|min:1|max:250',
            'correo' => 'required',
            'profesion' => 'required|string|min:1|max:250',
            'metododepago' => 'required',
            'iban' => 'required|string|min:1|max:250',
            'tipodecuota' => 'required',
            'nombredeltitularbancario' => 'required|string|min:1|max:250',
            'domiciliodeltitular' => 'required|string|min:1|max:250',
            'dnideltitular' => 'required|string|min:1|max:250',
            'titulardelatarjetadecredito' => 'required|string|min:1|max:250',
            'pais' => 'required',
            'comunidadoestado' => 'required',
            'provincia' => 'required',
            'poblacion' => 'required',
            'direccion' => 'required|string|min:1|max:250',
            'codigopostal' => 'required|string|min:1|max:250',
            'foto' => 'required',
            'acepto' => 'required'
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
            'nacimiento' => 'La fecha de nacimiento del nuevo hermano es requerida',
            'provincianacimiento' => 'La provincia de nacimiento del nuevo hermano es requerida',
            'poblacionnacimiento' => 'La poblacion de nacimiento del nuevo hermano es requerida',
            'genero' => 'El genero del nuevo hermano es requerido',
            'estado' => 'El estado del nuevo hermano es requerido',
            'presentado1' => 'Presentado1 del nuevo hermano es requerido',
            'presentado2' => 'Presentado2 del nuevo hermano es requerido',
            'telefonoprincipal' => 'El telefono principal del nuevo hermano es requerido',
            'telefonosecundario' => 'El telefono secundario del nuevo hermano es requerido',
            'correo' => 'El checkbox del correo del nuevo hermano es requerido',
            'profesion' => 'La profesion del nuevo hermano es requerida',
            'metododepago' => 'El metodo de pago del nuevo hermano es requerido',
            'iban' => 'El iban del nuevo hermano es requerido',
            'tipodecuota' => 'El tipo de cuota del nuevo hermano es requerida',
            'nombredeltitularbancario' => 'El nombre del titular bancario del nuevo hermano es requerido',
            'domiciliodeltitular' => 'El domicilio del titular del nuevo hermano es requerido',
            'dnideltitular' => 'El dni del titular del nuevo hermano es requerido',
            'titulardelatarjetadecredito' => 'El titular de la tarjeta del nuevo hermano es requerido',
            'pais' => 'El pais del nuevo hermano es requerido',
            'comunidadoestado' => 'La comunidad o estado del nuevo hermano es requerida',
            'provincia' => 'La provincia del nuevo hermano es requerida',
            'poblacion' => 'La poblacion del nuevo hermano es requerida',
            'direccion' => 'La direccion del nuevo hermano es requerida',
            'codigopostal' => 'El codigo postal del nuevo hermano es requerido',
            'foto' => 'La foto del nuevo hermano es requerida',
            'acepto' => 'Acepto del checkbox es requerido'
        ];
    }
}
