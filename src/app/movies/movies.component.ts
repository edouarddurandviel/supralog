import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { IntMovies } from './movies.interface';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  dataSource!: IntMovies;

  constructor(
    private service: MoviesService,
    private router: Router,
    ) {

    }

    submitted = false;
  
    ngOnInit(): void {
        this.service.getMoviesList().subscribe(
          (dataSource) => this.dataSource = dataSource
          );
    }
  


addNew() {
  this.router.navigate(['/applicants/add']);
}


}
