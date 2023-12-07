import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [  
{ path: 'main-page', component: MainViewComponent },
{ path: 'home-page', component: HomeViewComponent },
{ path: 'view-movie', component: ViewMovieComponent },
{ path: 'watchlist', component: WatchlistComponent },
{ path: '**', redirectTo: '/home-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
