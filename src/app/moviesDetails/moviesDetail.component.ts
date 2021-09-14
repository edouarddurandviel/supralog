import { Component, OnInit } from '@angular/core';
import { MoviesService } from './moviesDetail.service';
import { IntMoviesDetail } from './moviesDetail.interface';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-applicants',
  templateUrl: './moviesDetail.component.html',
  styleUrls: ['./moviesDetail.component.scss']
})
export class MoviesDetailComponent implements OnInit {

  dataSource!: IntMoviesDetail;

  constructor(
    private service: MoviesService,
    private router: Router,
    ) {
    
     }

    submitted = false;
  
    ngOnInit(): void {
        this.service.getMoviesList().subscribe(
          dataSource => this.dataSource = dataSource
          );
    }
  


addNew() {
  this.router.navigate(['/applicants/add']);
}


}
