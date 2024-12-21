import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MovieSearchComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Portal';  
}
