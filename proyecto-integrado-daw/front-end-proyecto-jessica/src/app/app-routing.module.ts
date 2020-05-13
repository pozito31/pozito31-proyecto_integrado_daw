import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './pagina/componentes/tablero/tablero.component';
import { LoginComponent } from './pagina/componentes/login/login.component';
import { RegistroComponent } from './pagina/componentes/registro/registro.component';
import { HistoriaComponent } from './pagina/componentes/historia/historia.component';
import { HermanomayorComponent } from './pagina/componentes/hermanomayor/hermanomayor.component';
import { NovenasComponent } from './pagina/componentes/novenas/novenas.component';
import { ParrocoComponent } from './pagina/componentes/parroco/parroco.component';
import { NoticiasComponent } from './pagina/componentes/noticias/noticias.component';
import { NuevohermanoComponent } from './pagina/componentes/nuevohermano/nuevohermano.component';
import { ImagenesComponent } from './pagina/componentes/imagenes/imagenes.component';
import { VideosComponent } from './pagina/componentes/videos/videos.component';
import { ContactoComponent } from './pagina/componentes/contacto/contacto.component';


const routes: Routes = [
  /*{path: '', redirectTo: '/login', pathMatch: 'full'},*/
  {path: '', component: TableroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'hermanomayor', component: HermanomayorComponent},
  {path: 'novenas', component: NovenasComponent},
  {path: 'parroco', component: ParrocoComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'nuevohermano', component: NuevohermanoComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
