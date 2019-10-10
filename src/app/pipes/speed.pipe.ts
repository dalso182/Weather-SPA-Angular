import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(value: any, unit: any): any {
    let newValue = value;
    if (unit === 'km/h') {
      newValue = value * 3.6;
    } else if (unit === 'm/h') {
      newValue = value * 2.2369;
    }
    return newValue;
  }

}
