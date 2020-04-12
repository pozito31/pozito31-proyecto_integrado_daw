import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent} from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { HistoriaComponent} from './historia/historia.component';


const routes: Routes = [
  { path: '', component: CabeceraComponent},
  { path: '', component: MenuComponent},
  { path: '', component: CuerpoComponent},
  { path: '', component: PieComponent},
  { path: 'historia', component: HistoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
