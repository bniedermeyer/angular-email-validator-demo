import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  emailForm = this.fb.group({
    email: ['', Validators.email]
  })

  constructor(private fb: FormBuilder) {}
}
