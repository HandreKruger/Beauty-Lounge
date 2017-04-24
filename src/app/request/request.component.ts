import { Component } from '@angular/core';
import {FormBuilder, FormGroup,  FormControl,  Validators} from '@angular/forms';

@Component({
  selector: 'bl-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
myForm: FormGroup;

constructor(private formBuilder: FormBuilder) {

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

  onSubmit() {
    console.log(this.myForm);
  }

}
