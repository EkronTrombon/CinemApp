import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesHomePageRoutingModule } from './movies-home-routing.module';

import { MoviesHomePage } from './movies-home.page';
import { ComponentsModule } from '../../components/components.module';
import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesHomePageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    MoviesHomePage
  ],
  entryComponents: [
    MovieDetailComponent
  ]
})
export class MoviesHomePageModule {}
