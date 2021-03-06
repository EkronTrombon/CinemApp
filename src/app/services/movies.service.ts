import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';
import { TVShowTopRated, VideoResults, Video, SearchResult, Movie } from '../interfaces/interfaces';

const URL = environment.url;
const API_KEY = environment.api_key;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  getNowPlaying() {
    const url = URL + `/movie/now_playing?api_key=${API_KEY}`;
    return new Promise<Movie[]>((resolve, reject) => {
      this.http.get(url).subscribe((resp: SearchResult) => {
        if (resp) {
          resolve(resp.results);
        } else {
          reject(true);
        }
      });
    });
  }

  getMovieDetail(id: number) {
    const url = URL + `/movie/${id}?api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getCredits(id: number) {
    const url = URL + `/movie/${id}/credits?api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getTvShowCredits(id: number) {
    const url = URL + `/tv/${id}/credits?api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getCastDetail(id: number) {
    const url = URL + `/person/${id}?api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getAllGenres() {
    const url = URL + `/genre/movie/list?api_key=${API_KEY}&language=en&include_image_language=en`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp.genres);
        } else {
          reject(true);
        }
      });
    });
  }

  searchMovies(value: string, page: number) {
    const url = URL + `/search/movie?query=${value}&page=${page}&api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  searchPeople(value: string, page: number) {
    const url = URL + `/search/person?query=${value}&page=${page}&api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  searchTvShow(value: string, page: number) {
    const url = URL + `/search/tv?query=${value}&page=${page}&api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getTopRatedTvShows() {
    const url = URL + `/tv/top_rated?api_key=${API_KEY}`;
    return new Promise<TVShowTopRated[]>((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp.results);
        } else {
          reject(true);
        }
      });
    });
  }

  getTvShowDetail(id: number) {
    const url = URL + `/tv/${id}?api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp: any) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getMovieVideos(id: number) {
    const url = URL + `/movie/${id}/videos?api_key=${API_KEY}`;
    return new Promise<Video[]>((resolve, reject) => {
      this.http.get(url).subscribe((resp: VideoResults) => {
        if (resp) {
          resolve(resp.results);
        } else {
          reject(true);
        }
      });
    });
  }

  getTvShowVideos(id: number) {
    const url = URL + `/tv/${id}/videos?api_key=${API_KEY}`;
    return new Promise<Video[]>((resolve, reject) => {
      this.http.get(url).subscribe((resp: VideoResults) => {
        if (resp) {
          resolve(resp.results);
        } else {
          reject(true);
        }
      });
    });
  }
}
