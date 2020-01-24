import { Component, OnInit, Input } from '@angular/core';
import { Movie, Credits, Genre } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { PosterComponent } from '../poster/poster.component';
import { myPopInAnimation } from '../../animations/enter';
import { myPopOutAnimation } from '../../animations/leave';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() movieId: number;
  movie: Movie = {};
  credits: Credits = {};
  oculto = 150;
  hiddenCredits = true;
  hiddenVideos = true;

  constructor(private modalCtrl: ModalController,
              private moviesService: MoviesService) {}

  async ngOnInit() {
    this.movie = await this.moviesService.getMovieDetail(this.movieId);
    this.credits = await this.moviesService.getCredits(this.movieId);
  }

  seeCredits(event) {
    if (event.detail.checked) {
      this.hiddenCredits = false;
    } else {
      this.hiddenCredits = true;
    }
  }

  seeVideos(event) {
    if (event.detail.checked) {
      this.hiddenVideos = false;
    } else {
      this.hiddenVideos = true;
    }
  }

  closeDetail() {
    this.modalCtrl.dismiss();
  }

  async openPoster(movie: Movie) {
    const modal = await this.modalCtrl.create({
      component: PosterComponent,
      componentProps: { 'movie': movie },
      cssClass: 'poster-modal',
      enterAnimation: myPopInAnimation,
      leaveAnimation: myPopOutAnimation
    });
    return await modal.present();
  }

}
