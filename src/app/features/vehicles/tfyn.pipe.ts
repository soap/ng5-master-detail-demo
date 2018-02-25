import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tfyn'
})
export class TfynPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (args && args.includes('|')) {
      const yn = args.split('|');
      return value ? yn[0] : yn[1];
    }

    return value ? 'Yes :)' : 'No :(';
  }

}
