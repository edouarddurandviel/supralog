import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
// interface
import { IntMoviesDetail} from './moviesDetail.interface';
import { IntMovies } from '../movies/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  //headers: Headers;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };


  getMovie(imdbID: string): Observable<IntMovies> {
    const moviesURL = `http://www.omdbapi.com/?apikey=4eacbfee&i=${imdbID}&plot=full`;
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
