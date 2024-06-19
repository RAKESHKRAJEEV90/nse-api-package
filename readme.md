# NSE Live API Wrapper

A Node.js wrapper for the NSE India API, providing easy access to stock market data, including stock quotes, market status, trade information, and more.

## Installation

Install the package via npm:

```bash
npm install nse-api-package

Usage
Here's how you can use the NSE Live API Wrapper in your project:

const NSELive = require('nse-api-package');

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


API
stockQuote(symbol)
Fetches stock quote information for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the stock quote data.

marketStatus()
Fetches the current market status.

Returns: A promise that resolves to the market status data.
tradeInfo(symbol)
Fetches trade information for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the trade information data.

stockQuoteFNO(symbol)
Fetches live F&O data for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the live F&O data.


chartData(symbol)
Fetches chart data for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the chart data.

marketTurnover(symbol)
Fetches marketTurnover for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the marketTurnover data.

equityDerivativeTurnover(symbol)
Fetches equityDerivativeTurnover for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the equityDerivativeTurnover data.

allIndices()
Fetches data of allIndices.

Parameters:

Returns: A promise that resolves to the allIndices data.

liveIndex(symbol)
Fetches liveIndex for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the liveIndex data.

indexOptionChain(symbol)
Fetches indexOptionChain for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the indexOptionChain data.


equitiesOptionChain(symbol)
Fetches equitiesOptionChain for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the equitiesOptionChain data.


currencyOptionChain(symbol)
Fetches currencyOptionChain for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the currencyOptionChain data.


liveFNO(symbol)
Fetches liveFNO for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the liveFNO data.


preOpenMarket(symbol)
Fetches preOpenMarket for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the preOpenMarket data.

 holidayList(symbol)
Fetches holidayList for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the holidayList data.

Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or support, please open an issue on the GitHub repository.

Note: This package is not affiliated with or endorsed by NSE India.this package is created only for study purpose 