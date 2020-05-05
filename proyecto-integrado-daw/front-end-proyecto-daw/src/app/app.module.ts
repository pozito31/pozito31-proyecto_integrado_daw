import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HermanomayorComponent } from './componentes/hermanomayor/hermanomayor.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NuevohermanoComponent } from './componentes/nuevohermano/nuevohermano.component';
import { ParrocoComponent } from './componentes/parroco/parroco.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { NovenasComponent } from './componentes/novenas/novenas.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContactoComponent,
    HermanomayorComponent,
    HistoriaComponent,
    ImagenesComponent,
    LoginComponent,
    MenuComponent,
    NoticiasComponent,
    NuevohermanoComponent,
    ParrocoComponent,
    PiePaginaComponent,
    RegistroComponent,
    TableroComponent,
    VideosComponent,
    NovenasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
