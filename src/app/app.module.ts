import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service'
import { MoviesDetailComponent } from './moviesDetails/moviesDetail.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MoviesComponent},
      {path: 'detail/:imdbID', component: MoviesDetailComponent},
      {path: '', redirectTo: 'heroes-list', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ]),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
