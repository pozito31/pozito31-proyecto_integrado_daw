import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
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


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TableroComponent,
    MenuComponent,
    PiePaginaComponent,
    HistoriaComponent,
    HermanomayorComponent,
    NovenasComponent,
    ParrocoComponent,
    NoticiasComponent,
    NuevohermanoComponent,
    ImagenesComponent,
    VideosComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
