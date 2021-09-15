import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
// interface
import { IntMovies} from './movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  //headers: Headers;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };


  getMoviesList(): Observable<IntMovies> {
    const moviesURL = `https://www.omdbapi.com/?apikey=4eacbfee&t=hero&y=2020&type=movie`;
    return this.http.get<IntMovies>(moviesURL)
    .pipe(
      catchError(this.handleError<IntMovies>('movies'))
    );
  }

  searchMovie(Title: string, Year: string, Type: string): Observable<IntMovies> {
    const moviesURL = `https://www.omdbapi.com/?apikey=4eacbfee&t=${Title}&y=${Year}&type=${Type}`;
    return this.http.get<IntMovies>(moviesURL)
    .pipe(
      catchError(this.handleError<IntMovies>('movies'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
