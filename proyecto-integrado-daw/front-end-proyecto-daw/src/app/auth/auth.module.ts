import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [LoginComponent, RegistroComponent, AuthComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
