import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service'
import { MoviesDetailComponent } from './moviesDetails/moviesDetail.component'
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MoviesComponent},
      {path: 'detail/:id', component: MoviesDetailComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ]),
  ],
  providers: [MoviesService],
  bootstrap: [MoviesComponent]
})
export class AppModule { }
