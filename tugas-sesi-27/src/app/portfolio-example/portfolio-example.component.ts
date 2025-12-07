import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockSymbolPipe } from '../pipes/stock-symbol.pipe';
import { PriceChangePipe } from '../pipes/price-change.pipe';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { MarketStatusPipe } from '../pipes/market-status.pipe';

@Component({
  selector: 'app-portfolio-example',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    StockSymbolPipe,
    PriceChangePipe,
    TimeAgoPipe,
    TruncatePipe,
    MarketStatusPipe,
  ],
  templateUrl: './portfolio-example.component.html',
  styleUrls: ['./portfolio-example.component.scss'],
})
export class PortfolioExampleComponent implements OnInit {
  @Input() titleInput: string = '';
  @Output() titleOutput = new EventEmitter<string>();

  portfolioName: string = 'My Portfolio';
  totalValue: number = 100000;

  stocks: {
    symbol: string;
    shares: number;
    price: number;
    previousPrice: number;
    updatedAt: Date;
    description: string;
    marketStatus: string;
  }[] = [
    {
      symbol: 'aapl',
      shares: 150,
      price: 150,
      previousPrice: 145,
      updatedAt: new Date(Date.now() - 1000 * 60 * 5), // 5 menit lalu
      description: 'Apple Inc. leading in tech devices.',
      marketStatus: 'open',
    },
    {
      symbol: 'GOOGL',
      shares: 50,
      price: 2000,
      previousPrice: 1990,
      updatedAt: new Date(Date.now() - 1000 * 60 * 60), // 1 jam lalu
      description: 'Google (Alphabet) search and AI giant.',
      marketStatus: 'open',
    },
    {
      symbol: 'MSFT',
      shares: 80,
      price: 300,
      previousPrice: 310,
      updatedAt: new Date(Date.now() - 1000 * 60 * 30), // 30 menit lalu
      description: 'Microsoft enterprise software & cloud.',
      marketStatus: 'closed',
    },
  ];

  isDisabled: boolean = false;
  searchTerm: string = '';
  newStockSymbol: string = '';

  ngOnInit(): void {
    console.log('Portfolio component initialized');
    this.calculateTotalValue();
  }

  calculateTotalValue(): void {
    this.totalValue = this.stocks.reduce((total, stock) => {
      return total + stock.shares * stock.price;
    }, 0);
  }

  addStock(symbol: string): void {
    if (symbol && symbol.trim() !== '') {
      this.stocks.push({
        symbol: symbol.trim().toUpperCase(),
        shares: 10,
        price: 100,
        previousPrice: 95,
        updatedAt: new Date(),
        description: `${symbol.toUpperCase()} newly added stock.`,
        marketStatus: 'after-hours',
      });
      this.calculateTotalValue();
      this.newStockSymbol = '';
    }
  }

  removeStock(index: number): void {
    this.stocks.splice(index, 1);
    this.calculateTotalValue();
  }

  disableButton(): void {
    this.isDisabled = true;
  }

  enableButton(): void {
    this.isDisabled = false;
  }

  sendOutput(): void {
    this.titleOutput.emit('Portfolio Updated: ' + this.portfolioName);
    console.log('Output event triggered!');
  }

  get filteredStocks() {
    if (!this.searchTerm) {
      return this.stocks;
    }
    return this.stocks.filter((stock) =>
      stock.symbol.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
