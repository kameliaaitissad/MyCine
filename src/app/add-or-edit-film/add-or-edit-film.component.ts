import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { FilmService } from '../@shared/services/film.service';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})

export class AddOrEditFilmComponent implements OnInit {
  @Output() newFilmEvent = new EventEmitter<any>(); 

  constructor(private filmService:FilmService
    ) { }
    
  FilmForm = new FormGroup({
    Titre_film: new FormControl(null, [
      Validators.required
      ]),
    Synopsis_film: new FormControl(),
    note_film: new FormControl()
  });

  submitFilm() {
      this.filmService.addFilm(this.FilmForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          window.location.reload();
        },
        error:(err)=>{
          alert("error")
        }
      })
    }
    

  ngOnInit(): void {

  }

}
