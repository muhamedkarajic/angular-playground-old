import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'appCast'
})
export class CastPipe implements PipeTransform {
  transform<T>(value: any, _type: (new (...args: any[]) => T) | T): T {
    return value as T;
  }
}
