import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { IntMovies } from './movies.interface';
import {  Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  dataSource!: IntMovies;
  result: IntMovies;

  constructor(
    private service: MoviesService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    ) {

    }

    submitted = false;

     // reactive form
     searchForm = this.fb.group({
        Title: ['', Validators.required],
        Year: ['', Validators.required],
        Type: ['', Validators.required],
    });

    get Title() {
      return Number(this.searchForm.get('Title'));
    }
    get Year() {
      return this.searchForm.get('Year');
    }
    get Type() {
      return this.searchForm.get('Type');
    }
   

  
    ngOnInit(): void {
      

    this.searchForm.patchValue({
        Title: 'hero',
        Year: '2020',
        Type: 'movie',
    });

    // init defaut value
    this.service.searchMovie('hero', '2020', 'movie')
    .subscribe( (dataSource) => this.dataSource = dataSource);

    //this.service.getMoviesList().subscribe((dataSource) => this.dataSource = dataSource);
    }

    clear(){
      this.searchForm.patchValue({
        Title: '',
        Year: '',
        Type: '',
    });
    }

    update() {

      this.service.searchMovie(
        this.searchForm.value.Title, 
        this.searchForm.value.Year, 
        this.searchForm.value.Type
        ).subscribe(
        response => {
          this.dataSource = response
          this.submitted = true;
          console.log(this.dataSource);
        },
        error => {
          console.log(error);
        }
      );
  
  }

}
