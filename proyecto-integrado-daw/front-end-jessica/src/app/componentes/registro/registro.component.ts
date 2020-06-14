import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../../servicios/login.service';
import { UsuariosService } from '../../servicios/usuarios.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  RegistroFormulario: FormGroup;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private usuariosService: UsuariosService,
    ) {}

  ngOnInit(): void {
    this.RegistroFormulario = new FormGroup({
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'apellidos': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'usuario': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ])
    });
  }

  get nombre() { return this.RegistroFormulario.get('nombre') }
  get apellidos() { return this.RegistroFormulario.get('apellidos') }
  get usuario() { return this.RegistroFormulario.get('usuario') }
  get password() { return this.RegistroFormulario.get('password') }

  onSubmit() {    
    
  }

}
