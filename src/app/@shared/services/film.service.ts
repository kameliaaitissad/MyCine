import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Films } from '../models/films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor( private httpClient:HttpClient
    ) {
   }


   getFilms(){
    //return this.httpClient.get<Films[]>(`${environment.api}/films`);
    return this.httpClient.get<any>("http://localhost:3000/films");
   }

  deleteFilm(id:any){
    //return this.httpClient.delete<any>(`${environment.api}/films`,id);
    return this.httpClient.delete<any>("http://localhost:3000/films/"+id);
    }

   addFilm(values:any):Observable<any>{
    return this.httpClient.post<any>(`${environment.api}/films`,values)
   }

   getFilm(id:any){
    return this.httpClient.get<any>("http://localhost:3000/films/"+id);
   }
  
  
}
