import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
// interface
import { IntMoviesDetail} from './moviesDetail.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  //headers: Headers;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };


  getMoviesList(): Observable<IntMoviesDetail> {
    const applicantsUrl = `http://localhost:3000/applicants`;
    return this.http.get<IntMoviesDetail>(applicantsUrl)
    .pipe(
      catchError(this.handleError<IntMoviesDetail>('applicants'))
    );
  }

  getMovie(id: number): Observable<IntMoviesDetail> {
    const applicantsUrl = `http://localhost:3000/applicants/${id}`;
    return this.http.get<IntMoviesDetail>(applicantsUrl)
    .pipe(
      catchError(this.handleError<IntMoviesDetail>('applicants'))
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
