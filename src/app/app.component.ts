import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'My_cine';

  Films:any = [];
 
  addFilm(newFilm: any) {
    this.Films.push(newFilm);
  }

}
