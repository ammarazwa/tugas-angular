import { MarketStatusPipe } from './market-status.pipe';

describe('MarketStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new MarketStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
