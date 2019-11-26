import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NowPlayingPageRoutingModule } from './now-playing-routing.module';

import { NowPlayingPage } from './now-playing.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NowPlayingPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    NowPlayingPage
  ],
  entryComponents: [
    MovieDetailComponent
  ]
})
export class NowPlayingPageModule {}
