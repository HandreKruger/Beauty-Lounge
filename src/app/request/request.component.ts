import { Component } from '@angular/core';
import {FormBuilder, FormGroup,  FormControl,  Validators} from '@angular/forms';

import {HttpService} from '../http.service';

@Component({
  selector: 'bl-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
myForm: FormGroup;

constructor(private formBuilder: FormBuilder, private httpService: HttpService) {

  this.myForm = formBuilder.group({
    first: new FormControl ('', [Validators.required]),
    last: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [
      Validators.required,
      // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:quotemark
      Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    phone: new FormControl ('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
    info: new FormControl(),
  });
}

  onSubmit(user: string) {
    this.httpService.sendData({user: user})
      .subscribe(
        data => console.log(data)
      );
  }

}
