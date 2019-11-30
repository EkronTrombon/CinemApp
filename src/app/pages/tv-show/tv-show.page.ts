import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TVShowTopRated, SearchPeopleResult, SearchTVShowsResult } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { TvshowDetailComponent } from '../../components/tvshow-detail/tvshow-detail.component';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.page.html',
  styleUrls: ['./tv-show.page.scss'],
})
export class TvShowPage implements OnInit {

  topRatedTvShows: TVShowTopRated[] = [];
  tvShowsResult: SearchTVShowsResult = {};
  tvShowsSearch: TVShowTopRated[] = [];
  searchBarAvailable = false;
  searchValue = '';
  page = 1;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) {}

  async ngOnInit() {
    this.topRatedTvShows = await this.moviesService.getTopRatedTvShows();
  }

  async search(event) {
    this.searchValue = event.detail.value;
    if (this.searchValue !== '') {
      this.tvShowsResult = await this.moviesService.searchTvShow(this.searchValue, this.page);
      this.tvShowsSearch = this.tvShowsResult.results;
    } else {
      this.tvShowsResult = {};
      this.tvShowsSearch = [];
      this.page = 1;
    }
  }

  loadData(event) {
    this.page++;
    setTimeout(async () => {
      if (this.page <= this.tvShowsResult.total_pages) {
        this.tvShowsResult = await this.moviesService.searchTvShow(this.searchValue, this.page);
        this.tvShowsSearch.push(...this.tvShowsResult.results);
      }
      if (this.tvShowsSearch.length === this.tvShowsResult.total_results) {
        event.target.disabled = true;
      }
      event.target.complete();
    }, 1000);
  }

  async openTvShowDetail(id: number) {
    const modal = await this.modalCtrl.create({
      component: TvshowDetailComponent,
      componentProps: { 'tvShowId': id }
    });
    return await modal.present();
  }

}