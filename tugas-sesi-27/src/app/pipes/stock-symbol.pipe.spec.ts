import { StockSymbolPipe } from './stock-symbol.pipe';

describe('StockSymbolPipe', () => {
  it('create an instance', () => {
    const pipe = new StockSymbolPipe();
    expect(pipe).toBeTruthy();
  });
});
