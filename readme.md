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
NSELive.getStockQuote('LT')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example: Fetching market status
NSELive.getMarketStatus()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example: Fetching trade information for a specific equity
NSELive.getTradeInfo('LT')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example: Fetching live F&O data for a specific equity
NSELive.getLiveFNO('NIFTY')
  .then(data => console.log(data))
  .catch(error => console.error(error));


API
getStockQuote(symbol)
Fetches stock quote information for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the stock quote data.

getMarketStatus()
Fetches the current market status.

Returns: A promise that resolves to the market status data.
getTradeInfo(symbol)
Fetches trade information for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the trade information data.

getLiveFNO(symbol)
Fetches live F&O data for the given symbol.

Parameters:

symbol (string): The stock symbol.
Returns: A promise that resolves to the live F&O data.

Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or support, please open an issue on the GitHub repository.

Note: This package is not affiliated with or endorsed by NSE India.