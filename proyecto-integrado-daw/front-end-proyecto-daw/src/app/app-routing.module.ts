import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './pagina/pagina/pagina.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AdministracionComponent } from './administracion/administracion/administracion/administracion.component';



const routes: Routes = [
  { path: '', redirectTo: 'pagina', pathMatch: 'full' },
  {
    path: 'pagina',
    component: PaginaComponent,
    loadChildren: './pagina/pagina-routing.module#PaginaRoutingModule'
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: './auth/auth-routing.module#AuthRoutingModule'
  }, 
  {
    path: 'administracion',
    component: AdministracionComponent,
    loadChildren: './administracion/administracion-routing.module#AdministracionRoutingModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
