import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplePageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PeoplePage]
})
export class PeoplePageModule {}
