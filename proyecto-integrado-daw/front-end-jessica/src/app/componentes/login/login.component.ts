import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Usuarios } from '../../interfaces/usuarios';
import { LoginService } from '../../servicios/login.service';
import { AlertService } from '../../servicios/alert.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  LoginFormulario: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private LoginService: LoginService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.LoginService.currentUserValue) {
        this.router.navigate(['/']);
    }
  }

 

  ngOnInit(): void {
    this.LoginFormulario = new FormGroup({
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

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  get usuario() { return this.LoginFormulario.get('usuario') }
  get password() { return this.LoginFormulario.get('password') }

  onSubmit() {    
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.LoginFormulario.invalid) {
            return;
        }

        this.loading = true;
        this.LoginService.login(this.usuario.value, this.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }

}
