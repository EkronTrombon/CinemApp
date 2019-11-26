import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MovieSlideComponent } from './movie-slide/movie-slide.component';
import { PipesModule } from '../pipes/pipes.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CreditsComponent } from './credits/credits.component';
import { CastInfoComponent } from './cast-info/cast-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MovieSlideComponent,
    MovieDetailComponent,
    CreditsComponent,
    CastInfoComponent
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
    CastInfoComponent
  ],
  entryComponents: [
    CastInfoComponent
  ]
})
export class ComponentsModule { }
