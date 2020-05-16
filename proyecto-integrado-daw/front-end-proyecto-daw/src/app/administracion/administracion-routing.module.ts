import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent} from './administracion/administracion/administracion.component';


const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'administracion', pathMatch: 'full' },
  {
    path: 'administracion',
    component: AdministracionComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }