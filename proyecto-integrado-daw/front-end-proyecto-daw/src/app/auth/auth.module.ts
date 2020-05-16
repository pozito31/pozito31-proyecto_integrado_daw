import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    AuthComponent
  ],
  exports: [
    AuthRoutingModule
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }