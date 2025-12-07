import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockSymbol',
  standalone: true,
})
export class StockSymbolPipe implements PipeTransform {
  transform(value: string, addPrefix: boolean = true): string {
    if (!value) return '';
    const formatted = value.toUpperCase().trim();
    return addPrefix ? `$${formatted}` : formatted;
  }
}
