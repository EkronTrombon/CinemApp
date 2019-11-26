import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

const URL = environment.url;
const API_KEY = environment.api_key;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  getNowPlaying() {
    const url = URL + `/movie/now_playing?api_key=${API_KEY}`;
    return this.http.get(url);
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

  searchMovies(value: string) {
    const url = URL + `/search/movie?query=${value}&api_key=${API_KEY}&language=en&include_image_language=en`;
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
}
