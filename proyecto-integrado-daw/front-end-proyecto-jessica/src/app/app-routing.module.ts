import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './pagina/pagina/pagina.component';




const routes: Routes = [
  { path: '', redirectTo: 'pagina', pathMatch: 'full' },
  {
    path: 'pagina',
    component: PaginaComponent,
    loadChildren: './pagina/pagina-routing.module#PaginaRoutingModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }