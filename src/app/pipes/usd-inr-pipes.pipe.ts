import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInrPipes'
})
export class UsdInrPipesPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args
    return value*x;
  }

}
