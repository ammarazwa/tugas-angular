import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketStatus',
  standalone: true,
})
export class MarketStatusPipe implements PipeTransform {
  transform(status: string): string {
    if (!status) return '⚪ Unknown';

    switch (status.toLowerCase()) {
      case 'open':
        return '🟢 Market Open';
      case 'closed':
        return '🔴 Market Closed';
      case 'pre':
        return '🟡 Pre-Market';
      case 'after':
        return '🔵 After-Hours';
      default:
        return '⚪ Unknown';
    }
  }
}
