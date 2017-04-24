import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,  FormControl,  Validators} from '@angular/forms';
import { Response } from '@angular/http';

import { HttpService } from 'app/http.service';

@Component({
  selector: 'bl-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
myForm: FormGroup;

constructor(private formBuilder: FormBuilder, private httpService: HttpService) {

  this.myForm = formBuilder.group({
    'first': ['', Validators.required],
    'last': ['', Validators.required],
    'email': ['', [
      Validators.required,
      // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:quotemark
      Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
    'phone': ['', Validators.required],
    'service': [],
    'textArea': [],
  });
}

ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: Response) => console.log(data.json())
      );
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
