import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from 'app/http.service';

@Component({
  selector: 'bl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: Response) => console.log(data)
      );
  }

}
