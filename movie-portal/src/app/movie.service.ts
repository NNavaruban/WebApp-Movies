import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Movie {
  title: string;
  year: number;
  posterImageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  //private apiUrl = 'https://localhost:7107/api/Movies'; 
   private apiUrl = 'https://movieportal-dpbzgranhmgfcth6.canadacentral-01.azurewebsites.net/api/Movies'; 


  constructor(private http: HttpClient) {}

  getMovies(query: string, apiKey: string): Observable<Movie[]> {
    const params = new HttpParams().set('s', query).set('apikey', apiKey);
    return this.http.get<Movie[]>(this.apiUrl, { params });
  }
}
