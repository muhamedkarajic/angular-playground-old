import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

export class CustomValidator extends Validators {
  static showError(control: FormControl, name?: string): string {
    if (!name) name = 'This field';
    if (control.hasError('required')) return `${name} is required.`;
    if (control.hasError('email')) return 'Email is not valid.';
    if (control.hasError('minlength'))
      return `Minimum lenght of ${control.errors?.minlength.requiredLength} required.`;
    if (control.hasError('maxlength'))
      return `Maximum lenght of ${control.errors?.maxlength.requiredLength} allowed.`;
    if (control.hasError('hasNumber')) return 'Require 1 number.';
    if (control.hasError('hasCapitalCase'))
      return 'Require 1 capital character.';
    if (control.hasError('hasSmallCase')) return 'Require 1 small character.';
    if (control.hasError('hasSpecialCharacters')) return 'Require 1 simbol.';
    return JSON.stringify(control.errors);
  }

  static get email(): ValidatorFn {
    return this.patternValidator(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      { email: true }
    );
  }

  static get hasNumber(): ValidatorFn {
    return this.patternValidator(/\d/, { hasNumber: true });
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
