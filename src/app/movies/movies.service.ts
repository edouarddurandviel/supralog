import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
// interface
import { IntMovies} from './movies.interface';
// class
import { Movies } from './movies';

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
      catchError(this.handleError<IntMovies>('applicants'))
    );
  }

  getMovie(id: number): Observable<IntMovies> {
    const moviesURL = `http://localhost:3000/applicants/${id}`;
    return this.http.get<IntMovies>(moviesURL)
    .pipe(
      catchError(this.handleError<IntMovies>('applicants'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  private handleErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
