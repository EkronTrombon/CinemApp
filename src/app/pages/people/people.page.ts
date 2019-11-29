import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { SearchPeopleResult } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { CastInfoComponent } from 'src/app/components/cast-info/cast-info.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  searchResult: SearchPeopleResult = {};

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  async search(event) {
    const searchValue = event.detail.value;
    if (searchValue !== '') {
      this.searchResult = await this.moviesService.searchPeople(searchValue);
    } else {
      this.searchResult = {};
    }
    console.log(this.searchResult);
  }

  async castInfo(id: number) {
    const modal = await this.modalCtrl.create({
      component: CastInfoComponent,
      cssClass: 'cast-modal',
      componentProps: { 'castId': id }
    });
    modal.present();
  }

}
