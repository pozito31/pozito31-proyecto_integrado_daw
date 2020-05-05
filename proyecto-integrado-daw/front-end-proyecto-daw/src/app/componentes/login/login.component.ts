import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

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
      
    }
  }

}
