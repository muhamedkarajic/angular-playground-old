import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
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
    CustomValidator.hasSmallCase
  ]);

  loginForm: FormGroup = this.fb.group({
    email: this.email,
    password: this.password
  });

  submitHandler(): void {
    this.loginForm.disable();
    of('LOGIN SUCCESSFUL!')
      .pipe(delay(1500))
      .subscribe((res) => {
        alert(res);
        this.loginForm.enable();
        this.loginForm.reset();
      });
  }
}
