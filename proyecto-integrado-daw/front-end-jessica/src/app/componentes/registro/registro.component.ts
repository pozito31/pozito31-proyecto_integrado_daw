import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../../servicios/login.service';
import { Usuarios } from '../../interfaces/usuarios';



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

  get nombre() { return this.RegistroFormulario.get('nombre').value }
  get apellidos() { return this.RegistroFormulario.get('apellidos').value }
  get usuario() { return this.RegistroFormulario.get('usuario').value }
  get password() { return this.RegistroFormulario.get('password').value }

  onSubmit() {   
    let model: Usuarios = {
      id_usuario: null,
      nombre: this.nombre(),
      apellidos: this.apellidos(),
      fecha_alta: null,
      usuario: this.usuario(),
      password: this.password()
    }

 this.LoginService.register(model).subscribe((val) => {
  console.log("usuario creado correctamente");
  }, error=>{
    console.log(error);
  }) 
  }

}
