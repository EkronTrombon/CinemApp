import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'now-playing',
    pathMatch: 'full'
  },
  {
    path: 'movies-home',
    loadChildren: () => import('./pages/movies-home/movies-home.module').then( m => m.MoviesHomePageModule)
  },
  {
    path: 'now-playing',
    loadChildren: () => import('./pages/now-playing/now-playing.module').then( m => m.NowPlayingPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'tv-show',
    loadChildren: () => import('./pages/tv-show/tv-show.module').then( m => m.TvShowPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
