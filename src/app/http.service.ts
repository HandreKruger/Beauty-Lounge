import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  getData() {
    return this.http.get('https://beauty-lounge-798cd.firebaseio.com/title.json');
  }
}
