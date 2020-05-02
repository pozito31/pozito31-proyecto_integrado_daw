import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../../servicios/login.service";
import { UserInterface } from "../../interfaces/user-interface";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private LoginService: LoginService,  private router: Router, private location: Location) { }

  private user: UserInterface = {
    usuario: "",
    password: ""
  };

  LoginFormulario: FormGroup;

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
  }

  get usuario() { return this.LoginFormulario.get('usuario') }
  get password() { return this.LoginFormulario.get('password') }

  onSubmit() {    
      return this.LoginService
        .loginUser(this.user.usuario, this.user.password)
        .subscribe(
        data => {
          this.LoginService.setUser(data.user);
          const token = data.id;
          this.LoginService.setToken(token);
          this.router.navigate(['/login/tablero']);
          location.reload();
        }
        );
  }
}
