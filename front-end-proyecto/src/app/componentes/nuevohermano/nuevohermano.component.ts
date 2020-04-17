import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevohermano',
  templateUrl: './nuevohermano.component.html',
  styleUrls: ['./nuevohermano.component.scss']
})
export class NuevohermanoComponent implements OnInit {

  constructor() { }

  NuevoHermanoFormulario: FormGroup;

  ngOnInit(): void {
    this.NuevoHermanoFormulario = new FormGroup({
      'nombre': new FormControl('', [
         Validators.required,
         Validators.minLength(4)
      ]),
      'primerapellido': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'segundoapellido': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'dni': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'correoelectronico': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'nacimiento': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'provincianacimiento': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'poblacionnacimiento': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'genero': new FormControl('', [
        Validators.required
      ]),
      'estado': new FormControl('', [
        Validators.required
      ]),
      'presentado1': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'presentado2': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'telefonoprincipal': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'telefonosecundario': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'correo': new FormControl('', [
        Validators.required
      ]),
      'profesion': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'metododepago': new FormControl('', [
        Validators.required
      ]),
      'iban': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'tipodecuota': new FormControl('', [
        Validators.required
      ]),
      'nombredeltitularbancario': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'domiciliodeltitular': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'dnideltitular': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'titulardelatarjetadecredito': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'pais': new FormControl('', [
        Validators.required
      ]),
      'comunidadoestado': new FormControl('', [
        Validators.required
      ]),
      'provincia': new FormControl('', [
        Validators.required
      ]),
      'poblacion': new FormControl('', [
        Validators.required
      ]),
      'direccion': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'codigopostal': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'foto': new FormControl('', [
        Validators.required
      ]),
      'acepto': new FormControl('', [
        Validators.required
      ])
    });
  }

  get nombre() { return this.NuevoHermanoFormulario.get('nombre') }
  get primerapellido() { return this.NuevoHermanoFormulario.get('primerapellido') }
  get segundoapellido() { return this.NuevoHermanoFormulario.get('segundoapellido') }
  get dni() { return this.NuevoHermanoFormulario.get('dni') }
  get correoelectronico() { return this.NuevoHermanoFormulario.get('correoelectronico') }
  get nacimiento() { return this.NuevoHermanoFormulario.get('nacimiento') }
  get provincianacimiento() { return this.NuevoHermanoFormulario.get('provincianacimiento') }
  get poblacionnacimiento() { return this.NuevoHermanoFormulario.get('poblacionnacimiento') }
  get genero() { return this.NuevoHermanoFormulario.get('genero') }
  get estado() { return this.NuevoHermanoFormulario.get('estado') }
  get presentado1() { return this.NuevoHermanoFormulario.get('presentado1') }
  get presentado2() { return this.NuevoHermanoFormulario.get('presentado2') }
  get telefonoprincipal() { return this.NuevoHermanoFormulario.get('telefonoprincipal') }
  get telefonosecundario() { return this.NuevoHermanoFormulario.get('telefonosecundario') }
  get correo() { return this.NuevoHermanoFormulario.get('correo') }
  get profesion() { return this.NuevoHermanoFormulario.get('profesion') }
  get metododepago() { return this.NuevoHermanoFormulario.get('metododepago') }
  get iban() { return this.NuevoHermanoFormulario.get('iban') }
  get tipodecuota() { return this.NuevoHermanoFormulario.get('tipodecuota') }
  get nombredeltitularbancario() { return this.NuevoHermanoFormulario.get('nombredeltitularbancario') }
  get domiciliodeltitular() { return this.NuevoHermanoFormulario.get('domiciliodeltitular') }
  get dnideltitular() { return this.NuevoHermanoFormulario.get('dnideltitular') }
  get titulardelatarjetadecredito() { return this.NuevoHermanoFormulario.get('titulardelatarjetadecredito') }
  get pais() { return this.NuevoHermanoFormulario.get('pais') }
  get comunidadoestado() { return this.NuevoHermanoFormulario.get('comunidadoestado') }
  get provincia() { return this.NuevoHermanoFormulario.get('provincia') }
  get poblacion() { return this.NuevoHermanoFormulario.get('poblacion') }
  get direccion() { return this.NuevoHermanoFormulario.get('direccion') }
  get codigopostal() { return this.NuevoHermanoFormulario.get('codigopostal') }
  get foto() { return this.NuevoHermanoFormulario.get('foto') }
  get acepto() { return this.NuevoHermanoFormulario.get('acepto') }


  onSubmit() {
    const valor = this.NuevoHermanoFormulario;
    console.log(valor);
  }

}
