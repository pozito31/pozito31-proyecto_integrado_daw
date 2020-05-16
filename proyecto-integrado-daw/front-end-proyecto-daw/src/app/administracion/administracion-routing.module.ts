import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent} from './administracion/administracion/administracion.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { NuevohermanoComponent } from './paginas/nuevohermano/nuevohermano.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';


const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'administracion', pathMatch: 'full' },
  {
    path: 'administracion',
    component: AdministracionComponent
  }, 
  {
    path: 'noticias',
    component: NoticiasComponent
  }, 
  {
    path: 'nuevo-hermano',
    component: NuevohermanoComponent
  }, 
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }