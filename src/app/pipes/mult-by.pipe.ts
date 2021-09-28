import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multBy'
})
export class MultByPipe implements PipeTransform {

  transform(value: number, multiplyOn: number = 10): number {
    return value * multiplyOn
  }

}
