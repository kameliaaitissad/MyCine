import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../@shared/services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  data : any;
  constructor(
    private router:Router,
    private filmService:FilmService,
    private activatedRoute:ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.filmService.getFilm(this.activatedRoute.snapshot.params['id']
      ).subscribe((res) => {
        this.data = res;
       
      });

   }

  ngOnInit(): void {
  }

}
