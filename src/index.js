import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import NSEArchive from './archive';
class NSELive {
  constructor() {
    this.jar = new CookieJar();
    this.session = wrapper(axios.create({
      baseURL: 'https://www.nseindia.com/api',
      jar: this.jar,
      withCredentials: true,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Connection': 'keep-alive'
      }
    }));
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;

    try {
      await this.session.get('https://www.nseindia.com');
      this.initialized = true;
    } catch (error) {
      console.error(`Initialization error: ${error.message}`);
    }
  }

  async get(route, params = {}) {
    await this.initialize();

    try {
      const response = await this.session.get(route, { params });
      return response.data;
    } catch (error) {
      console.error(`Error occurred: ${error.message}`);
      return null;
    }
  }
  

  async stockQuote(symbol) {
    return this.get('/quote-equity', { symbol });
  }

  async stockQuoteFNO(symbol) {
    return this.get('/quote-derivative', { symbol });
  }

  async tradeInfo(symbol) {
    return this.get('/quote-equity', { symbol, section: 'trade_info' });
  }

  async marketStatus() {
    return this.get('/marketStatus');
  }

  async chartData(symbol, indices = false) {
    const params = { index: symbol + 'EQN'};
    if (indices) {
      params.index = symbol;
      params.indices = 'true';
      
    }
    return this.get('/chart-databyindex', params);
  }

  async marketTurnover() {
    return this.get('/market-turnover');
  }

  async equityDerivativeTurnover(type = 'allcontracts') {
    return this.get('/equity-stock', { index: type });
  }

  async allIndices() {
    return this.get('/allIndices');
  }

  async liveIndex(symbol = 'NIFTY 50') {
    return this.get('/equity-stockIndices', { index: symbol });
  }

  async indexOptionChain(symbol = 'NIFTY') {
    return this.get('/option-chain-indices', { symbol });
  }

  async equitiesOptionChain(symbol) {
    return this.get('/option-chain-equities', { symbol });
  }

  async currencyOptionChain(symbol = 'USDINR') {
    return this.get('/option-chain-currency', { symbol });
  }

  async liveFNO() {
    return this.liveIndex('SECURITIES IN F&O');
  }

  async preOpenMarket(key) {
    return this.get('/market-data-pre-open', { key });
  }

  async holidayList() {
    return this.get('/holiday-master', { type: 'trading' });
  }

}

export { NSELive,NSEArchive };
