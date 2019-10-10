import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: any, unit: any): any {
    let newValue = value;
    if (unit === 'c') {
      newValue = value - 273.15;
    } else if (unit === 'f') {
      newValue = (value - 273.15) * 1.8 + 32;
    }
    return newValue;
  }

}
