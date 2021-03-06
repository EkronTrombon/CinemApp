import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MovieSlideComponent } from './movie-slide/movie-slide.component';
import { PipesModule } from '../pipes/pipes.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CreditsComponent } from './credits/credits.component';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { VideosComponent } from './videos/videos.component';
import { PosterComponent } from './poster/poster.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MovieSlideComponent,
    MovieDetailComponent,
    CreditsComponent,
    CastInfoComponent,
    TvshowDetailComponent,
    VideosComponent,
    PosterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    MovieSlideComponent,
    MovieDetailComponent,
    CreditsComponent,
    CastInfoComponent,
    TvshowDetailComponent,
    VideosComponent
  ],
  entryComponents: [
    CastInfoComponent,
    PosterComponent
  ]
})
export class ComponentsModule { }
