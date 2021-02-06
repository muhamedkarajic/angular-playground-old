import { Pipe, PipeTransform } from '@angular/core';
import { Helpers } from 'src/utilities/helpers';
import { AbstractControl } from '@angular/forms';
import * as hash from 'object-hash';

@Pipe({
  name: 'hasRequiredField',
  pure: false
})
export class HasRequiredFieldPipe implements PipeTransform {
  cachedControlHash: string | Int32Array = '';
  cachedResult = false;

  transform(control: AbstractControl): string {
    const newHashOfControl = hash(control);

    if (newHashOfControl !== this.cachedControlHash) {
      const nowHasRequiredField = Helpers.hasRequiredField(control);

      this.cachedControlHash = hash(control);
      this.cachedResult = nowHasRequiredField;

      return '*';
    }

    return '';
  }
}
