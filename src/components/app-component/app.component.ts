import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/utilities/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder, private http: HttpClient) {}

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
    CustomValidator.hasSmallCase
  ]);

  loginForm: FormGroup = this.fb.group({
    email: this.email,
    password: this.password
  });

  loading = false;

  submitHandler(): void {
    this.loading = true;
    this.http
      .post('https://api.slowfoodtime.com/reseller/login', this.loginForm.value)
      .subscribe(
        (x) => {
          console.log(x);
          this.loading = false;
        },
        (x) => {
          console.log(x);
          this.loading = false;
        }
      );
  }
}
