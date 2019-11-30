import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowPage } from './tv-show.page';

const routes: Routes = [
  {
    path: '',
    component: TvShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowPageRoutingModule {}
