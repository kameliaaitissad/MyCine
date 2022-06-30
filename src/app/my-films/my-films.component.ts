import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Films } from '../@shared/models/films';
import { FilmService } from '../@shared/services/film.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})

export class MyFilmsComponent implements OnInit {
  @Input() Films:any = []
  

  films: Films[] = [];
 
  constructor(private filmService:FilmService,private router:Router
    ) {  
     
    }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(){
    this.filmService.getFilms()
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.films = res
        console.log(this.films)
      },
      error:(err)=>{
        console.log("error")
        return err
      }
    })
  }

  deleteFilm(film : Films, index:number){
    this.filmService.deleteFilm(film.id).subscribe(()=>{
      this.films.splice(index, 1);
      console.log("film supprimé"),
      (err :any)=> {
        return console.log(err);
      }
    })

  }
 
 detailFilm(data:any){
  this.router.navigate(['film-detail',data],{state:data});
 }

 UpdateFilm(data:any){
  this.router.navigate(['Home',data],{state:data})
 }
  
  // onSubmit(value:Films){
  //   console.log(typeof value);
  //   this.filmService.addFilm(this.form.value).subscribe(films=>{
  //     console.log(films)
  //     this.films=films;
  //   })
  // }


}
