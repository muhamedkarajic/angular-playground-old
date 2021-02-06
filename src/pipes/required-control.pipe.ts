import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({ name: 'required-control' })
export class RequiredPipe implements PipeTransform {
  transform(control: AbstractControl): string {
    if (!control) {
      return '';
    }
    if (control.validator) {
      const validator = control.validator({} as AbstractControl);
      if (validator && validator.required) {
        return '*';
      }
    }
    return '';
  }
}
