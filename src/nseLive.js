const axios = require('axios');
const { wrapper } = require('axios-cookiejar-support');
const { CookieJar } = require('tough-cookie');

class NSELive {
  constructor() {
    this.jar = new CookieJar();
    this.session = wrapper(
      axios.create({
        baseURL: 'https://www.nseindia.com/api',
        jar: this.jar,
        withCredentials: true,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
          Accept: '*/*',
          'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'X-Requested-With': 'XMLHttpRequest',
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Connection: 'keep-alive',
        },
      })
    );
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
    const params = { index: symbol + 'EQN' };
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
  async corporateAnnouncements() {
    //index equities,debt,municipalBond,mf,sme,invitsreits,sse
    return this.get('/home-corporate-announcements?index=homepage');
  }
  async boardMeetings() {
    return this.get('/home-board-meetings?index=equities');
  }
  async corporateActions(index,from_date,to_date) {
    // return this.get('/home-corporate-actions',{index});
    return this.get('/corporates-corporateActions',{index,from_date,to_date});

  }
  async priceBandHitter() {
    return this.get('/live-analysis-price-band-hitter');
  }
  async weekHigh52Stock() {
   //shows number of highs and lows return this.get('/live-analysis-52weekhighstock');
    return this.get('/live-analysis-data-52weekhighstock');
  }
  async weekLow52Stock() {
    //shows number of highs and lows return this.get('/live-analysis-52weekhighstock');
     return this.get('/live-analysis-data-52weeklowstock');
   }
  async capitalmarketSnapshot() {
    return this.get('/snapshot-capital-market-ews');
  }
  async allContracts() {
    return this.get('/equity-stock?index=allcontracts');
  }
  async mostActiveSecurities() {
    //by value and by volume availabe
    return this.get('/live-analysis-most-active-securities?index=value&limit=10');
  }
  async gainersAndLosers() {
    //gainers and loosers available
    return this.get('/liveanalysis/gainers/allSec');
  }
  async gainersAndLosersTop20(index) {
    //gainers and loosers available
    
    return this.get('/live-analysis-variations',{ index });
  }
  async volumeGainers() {
    return this.get('/live-analysis-volume-gainers');
  }
  async top10Loosers() {
    return this.get('/liveanalysis/loosers/allSec');
  }
  async top10Gainers() {
    return this.get('/liveanalysis/gainers/allSec');
  }
  async commodityDerivatives() {
    //gainers and loosers available
    return this.get('/commodity-futures');
  }
  async currencyDerivatives() {
    //gainers and loosers available
    return this.get('/currency-derivatives?index=most_act_cont');
  }
  async interestRateDerivatives() {
    //gainers and loosers available
    return this.get('/irf-derivatives?index=most_act');
  }
  async listEtf() {
    return this.get('/etf');
  }
  async bloakDeals() {
    return this.get('/bloack-deal');
  }
  async largeDeals() {
    return this.get('/snapshot-capital-market-largedeal');
  }
  async optionChainIndices(symbol) {
    return this.get('/option-chain-indices',{symbol});
  
  }
  async optionChainEquities(symbol) {
    return this.get('/option-chain-equities',{symbol});
  }
   async financialResults() {
    //equity,sme,debt,insurance availablefor index
    //quaterly,halfyear,yearly
    return this.get('/corporates-financial-results?index=equities&period=Quarterly');
  }

  async eventCalender() {
    //equity and sme available
    return this.get('/event-calendar?');
  }
  async annualReports(symbol) {
    //equity and sme available
    return this.get('/annual-reports?index=equities',{symbol});
  }
  async equityMaster() {
    //list of all indices
    return this.get('/equity-master');
  }
  async historicalDataIndices() {
    //list of all indices
    return this.get('/historical/indicesHistory?indexType=NIFTY%2050&from=19-06-2024&to=26-06-2024');
  }
  async historicalDataIndiavix() {
    //list of all indices
    return this.get('historical/vixhistory?from=19-06-2024&to=26-06-2024');
  }
  async rightsIssue() {
    //list of all indices
    return this.get('/liveWatchRights-issues?index=activeIssues');
  }
  async ipoAndRightsIssue(category) {
    //list of all indices
    // {ipo|ofs|rights|tender|ipp|forthcomingIssues}
    return this.get('/all-upcoming-issues',{category});
  }
  
}

module.exports = NSELive;
