import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesHomePage } from './movies-home.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesHomePageRoutingModule {}
