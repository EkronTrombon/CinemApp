import { Component, OnInit, Input } from '@angular/core';
import { Movie, Credits, Genre } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() movieId: number;
  movie: Movie;
  credits: Credits;
  oculto = 150;
  hiddenCredits = true;

  constructor(private modalCtrl: ModalController,
              private moviesService: MoviesService) {}

  async ngOnInit() {
    this.movie = await this.moviesService.getMovieDetail(this.movieId);
    this.credits = await this.moviesService.getCredits(this.movieId);
    console.log(this.credits);
  }

  seeCredits(event) {
    console.log();
    if (event.detail.checked) {
      this.hiddenCredits = false;
    } else {
      this.hiddenCredits = true;
    }
  }

  closeDetail() {
    this.modalCtrl.dismiss();
  }

}
