import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IntMovies } from '../movies/movies.interface';
import { MoviesService } from './moviesDetail.service';


@Component({
  selector: 'app-detail',
  templateUrl: './moviesDetail.component.html',
  styleUrls: ['./moviesDetail.component.scss']
})
export class MoviesDetailComponent implements OnInit {

  state$: Observable<IntMovies>;

  constructor(
    private router: Router,
    private service: MoviesService,
    public activatedRoute: ActivatedRoute
    ) {
    
     }

    submitted = false;
    data: IntMovies;
  
    ngOnInit(): void {
      this.service.getMovie(this.activatedRoute.snapshot.paramMap.get('imdbID')!).subscribe((data) => this.data = data);
     
    }
  
    goBack() {
      this.router.navigate(['/']);
    }


}
