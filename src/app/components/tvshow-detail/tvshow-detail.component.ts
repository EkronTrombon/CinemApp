import { Component, OnInit, Input } from '@angular/core';
import { TvShowDetail, Credits, Movie } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';
import { ModalController } from '@ionic/angular';
import { PosterComponent } from '../poster/poster.component';
import { myPopInAnimation } from 'src/app/animations/enter';
import { myPopOutAnimation } from 'src/app/animations/leave';

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrls: ['./tvshow-detail.component.scss'],
})
export class TvshowDetailComponent implements OnInit {

  @Input() tvShowId: number;
  tvShow: TvShowDetail = {};
  credits: Credits;
  oculto = 150;
  hiddenCredits = true;
  hiddenVideos = true;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) {}

  async ngOnInit() {
    this.tvShow = await this.moviesService.getTvShowDetail(this.tvShowId);
    this.credits = await this.moviesService.getTvShowCredits(this.tvShowId);
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