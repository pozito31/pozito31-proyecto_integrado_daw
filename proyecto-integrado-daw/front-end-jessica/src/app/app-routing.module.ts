import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { HermanomayorComponent } from './componentes/hermanomayor/hermanomayor.component';
import { NovenasComponent } from './componentes/novenas/novenas.component';
import { ParrocoComponent } from './componentes/parroco/parroco.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NuevohermanoComponent } from './componentes/nuevohermano/nuevohermano.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministracionComponent } from './administracion/administracion/administracion.component';

const routes: Routes = [
  /*{path: '', redirectTo: 'login', pathMatch: 'full' },*/
  {path: '', component: TableroComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'hermanomayor', component: HermanomayorComponent},
  {path: 'novenas', component: NovenasComponent},
  {path: 'parroco', component: ParrocoComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'nuevohermano', component: NuevohermanoComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent },
  {path: 'registro', component: RegistroComponent},
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
