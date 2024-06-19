import { expect } from 'chai';
import { NSELive } from '../src/index.js';

const nse = new NSELive();

describe('NSELive API Wrapper', () => {
  it('should fetch stock quote for equity', async function() {
    this.timeout(10000);

    const symbol = 'LT';
    const data = await nse.stockQuote(symbol);
    // console.log('Stock Quote for Equity Response:', data);
    expect(data).to.be.an('object');
    expect(data.info).to.have.property('symbol', symbol);
    expect(data.priceInfo).to.be.an('object');
  });
  it('should fetch stock quote for derivative', async function() {
    this.timeout(10000);

    const symbol = 'NIFTY';
    const data = await nse.stockQuoteFNO(symbol);
    // console.log('Derivative Stock Quote Response:', JSON.stringify(data, null, 2));
    expect(data).to.be.an('object');
    expect(data).to.have.property('metadata');
  });
  
  
  

  it('should fetch trade info', async () => {
    this.timeout(10000);

    const symbol = 'LT';
    const data = await nse.tradeInfo(symbol);
    expect(data).to.be.an('object');
    expect(data).to.have.property('noBlockDeals');
  });

  it('should fetch market status', async function() {
    this.timeout(10000);

    const data = await nse.marketStatus();
    console.log('Market Status Response:', JSON.stringify(data, null, 2));
    expect(data).to.be.an('array');
    expect(data.length).to.be.greaterThan(0);
  });
  
  

  it('should fetch chart data', async () => {
    const symbol = 'LT';
    const data = await nse.chartData(symbol);
    expect(data).to.be.an('object');
  });

  it('should fetch market turnover', async () => {
    const data = await nse.marketTurnover();
    expect(data).to.be.an('object');
  });

  it('should fetch equity derivative turnover', async () => {
    const data = await nse.equityDerivativeTurnover();
    expect(data).to.be.an('object');
  });

  it('should fetch all indices', async () => {
    const data = await nse.allIndices();
    expect(data).to.be.an('object');
  });

  it('should fetch live index', async () => {
    const data = await nse.liveIndex();
    expect(data).to.be.an('object');
  });

  it('should fetch index option chain', async () => {
    const data = await nse.indexOptionChain();
    expect(data).to.be.an('object');
  });

  it('should fetch equities option chain', async () => {
    const symbol = 'LT';
    const data = await nse.equitiesOptionChain(symbol);
    expect(data).to.be.an('object');
  });

  it('should fetch currency option chain', async () => {
    const symbol = 'USDINR';
    const data = await nse.currencyOptionChain(symbol);
    expect(data).to.be.an('object');
  });

  it('should fetch live FNO', async () => {
    const data = await nse.liveFNO();
    expect(data).to.be.an('object');
  });

  it('should fetch pre-open market data', async () => {
    const data = await nse.preOpenMarket();
    expect(data).to.be.an('object');
  });

  it('should fetch holiday list', async () => {
    const data = await nse.holidayList();
    expect(data).to.be.an('object');
  });
});
