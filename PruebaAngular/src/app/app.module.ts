import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SeriesComponent } from './components/series/series.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SeriesComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
