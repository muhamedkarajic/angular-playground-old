import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'appTypeof'
})
export class TypeofPipe implements PipeTransform {
  transform(value: unknown): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" {
    return typeof value;
  }
}