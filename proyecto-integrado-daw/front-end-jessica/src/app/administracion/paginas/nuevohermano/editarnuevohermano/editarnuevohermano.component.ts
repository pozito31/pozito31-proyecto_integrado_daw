import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editarnuevohermano',
  templateUrl: './editarnuevohermano.component.html',
  styleUrls: ['./editarnuevohermano.component.sass']
})
export class EditarnuevohermanoComponent implements OnInit {

  constructor() { }

  NuevohermanoFormulario: FormGroup;

  ngOnInit(): void {
    this.NuevohermanoFormulario = new FormGroup({
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
      'telefono': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get nombre() { return this.NuevohermanoFormulario.get('nombre') }
  get primerapellido() { return this.NuevohermanoFormulario.get('primerapellido') }
  get segundoapellido() { return this.NuevohermanoFormulario.get('segundoapellido') }
  get dni() { return this.NuevohermanoFormulario.get('dni') }
  get correoelectronico() { return this.NuevohermanoFormulario.get('correoelectronico') }
  get telefono() { return this.NuevohermanoFormulario.get('telefono') }

  onSubmit() {
    
  }


}
