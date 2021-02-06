import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/utilities/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  email: FormControl = new FormControl('', [
    CustomValidator.required,
    CustomValidator.email
  ]);

  password: FormControl = new FormControl('', [
    CustomValidator.required,
    CustomValidator.minLength(5),
    CustomValidator.maxLength(16),
    CustomValidator.hasNumber,
    CustomValidator.hasCapitalCase,
    CustomValidator.hasSmallCase,
    CustomValidator.hasSpecialCharacters
  ]);

  loginForm: FormGroup = this.fb.group({
    email: this.email,
    password: this.password
  });
}
