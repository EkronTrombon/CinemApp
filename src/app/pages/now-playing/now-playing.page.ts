import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrls: ['./now-playing.page.scss'],
})
export class NowPlayingPage implements OnInit {

  nowPlayingList: Movie[] =  [];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
    this.nowPlayingList = await this.moviesService.getNowPlaying();
  }

}
