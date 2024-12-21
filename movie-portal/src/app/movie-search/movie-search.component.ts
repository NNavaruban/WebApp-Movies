import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule], 
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  title: string = '';
  apikey: string = 'PQREWD6ADWERAS';    // Assume this is as apikey - hardcoded one
  movies: any[] = [];
  loading: boolean = false;

  constructor(private movieService: MovieService) {}
  
  ngOnInit(): void {

    this.movieService.getMovies(this.title, this.apikey).subscribe(
      data => {
        this.movies = data || [];
        this.loading = false;
      },
      error => {
        console.error('Faled to fetching movies', error);
        this.loading = false;
      }
    );
  }

  onSearch(): void {

      this.loading = true;
      this.movieService.getMovies(this.title, this.apikey).subscribe(
        data => {
          this.movies = data || [];
          this.loading = false;
        },
        error => {
          console.error('Failed to search movies', error);
          this.loading = false;
        }
      );
    
  }
}
