import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhillips'
})
export class CaptalizePhillipsPipe implements PipeTransform {

  transform(value: string): string {
    let r = value.charAt(0).toUpperCase();
    value = value.replace(value.charAt(0), r);
    return value;
  }

}
