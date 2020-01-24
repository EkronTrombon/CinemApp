import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { SearchPeopleResult } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { CastInfoComponent } from 'src/app/components/cast-info/cast-info.component';
import { People } from '../../interfaces/interfaces';
import { mySlideInAnimation } from 'src/app/animations/enter';
import { mySlideOutAnimation } from 'src/app/animations/leave';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  searchResult: SearchPeopleResult = {};
  peopleSearch: People[] = [];
  searchValue = '';
  page = 1;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  async search(event) {
    this.searchValue = event.detail.value;
    if (this.searchValue !== '') {
      this.searchResult = await this.moviesService.searchPeople(this.searchValue, this.page);
      this.peopleSearch = this.searchResult.results;
    } else {
      this.searchResult = {};
      this.peopleSearch = [];
      this.page = 1;
    }
  }

  loadData(event) {
    this.page++;
    setTimeout(async () => {
      if (this.page <= this.searchResult.total_pages) {
        this.searchResult = await this.moviesService.searchPeople(this.searchValue, this.page);
        this.peopleSearch.push(...this.searchResult.results);
      }
      if (this.peopleSearch.length === this.searchResult.total_results) {
        event.target.disabled = true;
      }
      event.target.complete();
    }, 1000);
  }

  async castInfo(id: number) {
    const modal = await this.modalCtrl.create({
      component: CastInfoComponent,
      // cssClass: 'cast-modal',
      componentProps: { 'castId': id },
      enterAnimation: mySlideInAnimation,
      leaveAnimation: mySlideOutAnimation
    });
    modal.present();
  }

}
