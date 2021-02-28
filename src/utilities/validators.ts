import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

export class CustomValidator extends Validators {
  static printError(control: FormControl, name?: string): string {
    if (!name) name = 'This field';
    if (control.hasError('numbersOnly'))
      return 'All characters must be numeric.';
    if (control.hasError('lettersOnly'))
      return 'All characters must be letters.';
    if (control.hasError('lettersAndSpaces'))
      return 'Characters must be letters or spaces.';
    if (control.hasError('min'))
      return `${name} must be at least ${control.errors?.min.min}.`;
    if (control.hasError('required')) return `${name} is required.`;
    if (control.hasError('email')) return 'Email is not valid.';
    if (control.hasError('minlength'))
      return `Minimum lenght of ${control.errors?.minlength.requiredLength} required.`;
    if (control.hasError('maxlength'))
      return `Maximum lenght of ${control.errors?.maxlength.requiredLength} allowed.`;
    if (control.hasError('hasNumber')) return `${name} requires one digit.`;
    if (control.hasError('hasCapitalCase'))
      return `${name} requires one upper case letter.`;
    if (control.hasError('minDate'))
      return `Please select a date between today and above.`;
    if (control.hasError('hasSmallCase'))
      return `${name} requires one small character.`;
    if (control.hasError('hasSpecialCharacters'))
      return `${name} requires one simbil.`;
    return JSON.stringify(control.errors);
  }

  static get email(): ValidatorFn {
    return this.patternValidator(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      { email: true }
    );
  }

  static get minDateToday(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const currentDate: Date = new Date();
      const selectedDate = new Date(control.value);

      return currentDate.getFullYear() <= selectedDate.getFullYear() &&
        currentDate.getMonth() <= selectedDate.getMonth() &&
        currentDate.getDay() <= selectedDate.getDay()
        ? null
        : { minDate: currentDate };
    };
  }

  static get hasNumber(): ValidatorFn {
    return this.patternValidator(/\d/, { hasNumber: true });
  }

  static get numbersOnly(): ValidatorFn {
    return this.patternValidator(/^[0-9]*$/, { numbersOnly: true });
  }

  static get lettersAndSpaces(): ValidatorFn {
    return this.patternValidator(/^[a-zA-Z ]*$/, { lettersAndSpaces: true });
  }

  static get lettersOnly(): ValidatorFn {
    return this.patternValidator(/^[a-zA-Z]*$/, { lettersOnly: true });
  }

  static get hasCapitalCase(): ValidatorFn {
    return this.patternValidator(/[A-Z]/, { hasCapitalCase: true });
  }

  static get hasSmallCase(): ValidatorFn {
    return this.patternValidator(/[a-z]/, { hasSmallCase: true });
  }

  static get hasSpecialCharacters(): ValidatorFn {
    return this.patternValidator(/[$&+,:;=?@#|'<>.^*()%!-]/, {
      hasSpecialCharacters: true
    });
  }

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
}
