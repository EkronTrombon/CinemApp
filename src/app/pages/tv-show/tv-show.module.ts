import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvShowPageRoutingModule } from './tv-show-routing.module';

import { TvShowPage } from './tv-show.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { TvshowDetailComponent } from '../../components/tvshow-detail/tvshow-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvShowPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    TvShowPage
  ],
  entryComponents: [
    TvshowDetailComponent
  ]
})
export class TvShowPageModule {}
