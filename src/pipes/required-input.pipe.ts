import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'required' })
export class RequiredPipe implements PipeTransform {
  transform(required: boolean): string {
    return required ? '*' : '';
  }
}
