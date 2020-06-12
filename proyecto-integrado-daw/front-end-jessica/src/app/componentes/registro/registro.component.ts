import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../servicios/alert.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { LoginService } from '../../servicios/login.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  RegistroFormulario: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private UsuariosService: UsuariosService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.LoginService.currentUserValue) {
        this.router.navigate(['/']);
    }
  }

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
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.RegistroFormulario.invalid) {
        return;
    }

    this.loading = true;
    this.UsuariosService.register(this.RegistroFormulario.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

}
