import { AbstractControl } from '@angular/forms';

export abstract class Helpers {
  static humanize(value: string, capitalLetter: boolean = false): string {
    if (typeof value !== 'string') {
      return value;
    }
    value = value.split(/(?=[A-Z])/).join(' ');
    if (capitalLetter) value = value[0].toUpperCase() + value.slice(1);
    return value;
  }

  static hasRequiredField(
    abstractControl: AbstractControl | null | undefined
  ): boolean {
    if (!abstractControl) {
      return false;
    }

    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }

    if (abstractControl.get('controls')) {
      for (const controlName in abstractControl.get('controls')) {
        if (abstractControl.get('controls')?.get(controlName)) {
          if (
            this.hasRequiredField(
              abstractControl.get('controls')?.get(controlName)
            )
          ) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
