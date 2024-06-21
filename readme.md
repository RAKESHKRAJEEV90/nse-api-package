# NSE Live API Wrapper

A Node.js wrapper for the NSE India API, providing easy access to stock market data, including stock quotes, market status, trade information, and more.

## Installation

Install the package via npm:

```bash
npm install nse-api-package

Usage
Here's how you can use the NSE Live API Wrapper in your project:

const {NSELive,NSEArchive} = require('nse-api-package');

// Example: Fetching stock quote for a specific equity
NSELive.stockQuote('LT')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example: Fetching data of all Indices
NSELive.allIndices()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example: Fetching trade information for a specific equity
NSELive.tradeInfo('LT')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example: Fetching live F&O data for a specific equity
NSELive.stockQuoteFNO('NIFTY')
  .then(data => console.log(data))
  .catch(error => console.error(error));

//Example: Fetch  chart data for the index 'NIFTY'
NSELive.chartData('NIFTY 50',true)
  .then(data => console.log(data));
  .catch(error => console.error(error));

//Example: Fetch  EOD data From NSE
NSEArchive.downloadEodDataBetweenDates('15052024','20062024','./output')
  .then(data => console.log(data));
  .catch(error => console.error(error));

API
NSELive.stockQuote(symbol)
Fetches stock quote information for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the stock quote data.

NSELive.marketStatus()
Fetches the current market status.

Returns: A promise that resolves to the market status data.
NSELive.tradeInfo(symbol)
Fetches trade information for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the trade information data.

NSELive.stockQuoteFNO(symbol)
Fetches live F&O data for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the live F&O data.


NSELive.chartData(symbol)
Fetches chart data for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the chart data.

NSELive.marketTurnover(symbol)
Fetches marketTurnover for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the marketTurnover data.

NSELive.equityDerivativeTurnover(symbol)
Fetches equityDerivativeTurnover for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the equityDerivativeTurnover data.

NSELive.allIndices()
Fetches data of allIndices.

Parameters:

Returns: A promise that resolves to the allIndices data.

NSELive.liveIndex(symbol)
Fetches liveIndex for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the liveIndex data.

NSELive.indexOptionChain(symbol)
Fetches indexOptionChain for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the indexOptionChain data.


NSELive.equitiesOptionChain(symbol)
Fetches equitiesOptionChain for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the equitiesOptionChain data.


NSELive.currencyOptionChain(symbol)
Fetches currencyOptionChain for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the currencyOptionChain data.


NSELive.liveFNO(symbol)
Fetches liveFNO for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the liveFNO data.


NSELive.preOpenMarket(category)
Fetches preOpenMarket for the given category.

Parameters:

category (string): The category symbol.[NIFTY,BANKNIFTY,SME,FO,OTHERS,ALL]

Returns: A promise that resolves to the preOpenMarket data.

NSELive.holidayList()
Fetches holidayList for NSE.

Parameters:

Returns: A promise that resolves to the holidayList data.

NSEArchive.downloadEodDataForDate(date, outputDir)
Fetches End of the day(EOD) data of stocks from NSE for the given date.

Parameters:

symbol (date, outputDir): date in the format ddmmyyyy [eg:2June2024 as '02062024'].outputDir for save the downloaded eod file [eg:'./output']

Returns: A promise that downloads and save the EOD data for the given date


NSEArchive.downloadEodDataBetweenDates(startDateStr, endDateStr, outputDir)

Fetches End of the day(EOD) data of stocks daily from NSE for the given period.

Parameters:

symbol (startDateStr, endDateStr, outputDir): date in the format ddmmyyyy [eg:2June2024 as '02062024'].outputDir for save the downloaded eodfile [eg:'./output']

Returns: A promise that downloads and save the EOD data for a given period.

NSEArchive.downloadTodayEodData(outputDir)

Fetches End of the day(EOD) data of stocks from NSE for today

Parameters:

symbol  (outputDir): outputDir for save the downloaded eodfile [eg:'./output']

Returns: A promise that downloads and save the EOD data for today.


Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or support, please open an issue on the GitHub repository.

Note: This package is not affiliated with or endorsed by NSE India.this package is created only for study purpose 