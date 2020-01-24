import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { SearchResult, Movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { myPopInAnimation } from 'src/app/animations/enter';
import { myPopOutAnimation } from 'src/app/animations/leave';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.page.html',
  styleUrls: ['./movies-home.page.scss'],
})
export class MoviesHomePage implements OnInit {

  searchResults: SearchResult = {};
  moviesSearch: Movie[] = [];
  searchValue = '';
  page = 1;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  async search(event) {
    this.searchValue = event.detail.value;
    if (this.searchValue !== '') {
      this.searchResults = await this.moviesService.searchMovies(this.searchValue, this.page);
      this.moviesSearch = this.searchResults.results;
    } else {
      this.searchResults = {};
      this.moviesSearch = [];
      this.page = 1;
    }
  }

  loadData(event) {
    this.page++;
    setTimeout(async () => {
      if (this.page <= this.searchResults.total_pages) {
        this.searchResults = await this.moviesService.searchMovies(this.searchValue, this.page);
        this.moviesSearch.push(...this.searchResults.results);
      }
      if (this.moviesSearch.length === this.searchResults.total_results) {
        event.target.disabled = true;
      }
      event.target.complete();
    }, 1000);
  }

  async movieDetail(id: number) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: { 'movieId': id },
      enterAnimation: myPopInAnimation,
      leaveAnimation: myPopOutAnimation
    });
    return await modal.present();
  }

}
