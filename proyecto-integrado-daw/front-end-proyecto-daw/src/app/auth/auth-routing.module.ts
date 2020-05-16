import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';


export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

