import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { UserLogin } from '../../interfaces/usuarios';
import { LoginService } from '../../servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  LoginFormulario: FormGroup;
  constructor(private router: Router, private LoginService: LoginService) {}
  
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
      
    let model: UserLogin = {
        usuario: this.LoginFormulario.get('usuario').value,
        password: this.LoginFormulario.get('password').value
      }

   this.LoginService.login(model).subscribe((val) => {
    if(val){
      if(val['nombre'] == 'administrador'){
        this.router.navigate(['/administracion']);
      }else{
        this.router.navigate(['/tablero']);
      }
    }
      
    }, error=>{
      console.log(error);
    })
  }

}
