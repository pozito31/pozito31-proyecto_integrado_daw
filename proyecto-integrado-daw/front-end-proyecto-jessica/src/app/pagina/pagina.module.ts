import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HermanomayorComponent } from './componentes/hermanomayor/hermanomayor.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NovenasComponent } from './componentes/novenas/novenas.component';
import { NuevohermanoComponent } from './componentes/nuevohermano/nuevohermano.component';
import { ParrocoComponent } from './componentes/parroco/parroco.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CabeceraComponent, ContactoComponent, HermanomayorComponent, HistoriaComponent, ImagenesComponent, LoginComponent, MenuComponent, NoticiasComponent, NovenasComponent, NuevohermanoComponent, ParrocoComponent, PiePaginaComponent, RegistroComponent, TableroComponent, VideosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class PaginaModule { }
