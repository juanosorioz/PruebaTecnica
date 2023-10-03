import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SeriesComponent } from './components/series/series.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'peliculas', component: PeliculasComponent},
  { path: '**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
