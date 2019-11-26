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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
