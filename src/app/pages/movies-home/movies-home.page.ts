import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { SearchResult } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.page.html',
  styleUrls: ['./movies-home.page.scss'],
})
export class MoviesHomePage implements OnInit {

  searchResults: SearchResult = {};

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  async search(event) {
    const searchValue = event.detail.value;
    if (searchValue !== '') {
      this.searchResults = await this.moviesService.searchMovies(searchValue);
    } else {
      this.searchResults = {};
    }
    console.log(this.searchResults);
  }

  async movieDetail(id: number) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: { 'movieId': id }
    });
    return await modal.present();
  }

}
