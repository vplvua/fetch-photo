import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environment';

interface UnsplashResponse {
  title: string;
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  url: string = environment.unsplashUrl;
  token: string = environment.unsplashToken;

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<UnsplashResponse>(this.url, {
      headers: {
        Authorization: this.token,
      },
    });
  }
}
