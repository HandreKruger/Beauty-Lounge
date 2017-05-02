import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  getData() {
    return this.http.get('https://beauty-lounge-798cd.firebaseio.com/title.json')
    .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    return this.http.post('https://beauty-lounge-798cd.firebaseio.com/data.json', body)
    .map((data: Response) => data.json());
  }

  getUserData() {
    return this.http.get('https://beauty-lounge-798cd.firebaseio.com/data.json')
    .map((response: Response) => response.json());
  }
}
