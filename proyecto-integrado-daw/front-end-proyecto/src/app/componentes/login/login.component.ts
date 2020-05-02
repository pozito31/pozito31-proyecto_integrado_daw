import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../../servicios/login.service";
import { UserInterface } from "../../interfaces/user-interface";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private LoginService: LoginService) { }

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
    const val = this.LoginFormulario.value;
    console.log(val);
    if (val.usuario && val.password){
      this.LoginService.login(val.usuario, val.password);
    }
  }

}
