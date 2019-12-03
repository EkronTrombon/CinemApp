import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Video } from '../../interfaces/interfaces';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  @Input() movieId: number;
  @Input() type: string;
  videoList: Video[] = [];

  constructor(private moviesService: MoviesService,
              private youtube: YoutubeVideoPlayer) {}

  async ngOnInit() {
    if (this.type === 'movie') {
      this.videoList = await this.moviesService.getMovieVideos(this.movieId);
    }
    if (this.type === 'tvShow') {
      this.videoList = await this.moviesService.getTvShowVideos(this.movieId);
    }
  }

  openVideo(id: string) {
    this.youtube.openVideo(id);
  }

}