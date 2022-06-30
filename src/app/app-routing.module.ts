import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MyFilmsComponent } from './my-films/my-films.component';

const routes: Routes = [
  {
    path:'film-detail/:id',component:FilmDetailsComponent
  },
  {
    path:'',redirectTo:"Home",pathMatch:"full"
  },
  {
    path:'Home/:id',component:AddOrEditFilmComponent
  },
  {
    path:'Home',component:AddOrEditFilmComponent
  },
  {
    path:'Myfilms',component:MyFilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
