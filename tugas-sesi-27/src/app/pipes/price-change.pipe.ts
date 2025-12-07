import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceChange',
  standalone: true,
})
export class PriceChangePipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0) {
      return `<span style="color: green;">+${value}%</span>`;
    } else if (value < 0) {
      return `<span style="color: red;">${value}%</span>`;
    }
    return `<span style="color: gray;">${value}%</span>`;
  }
}
