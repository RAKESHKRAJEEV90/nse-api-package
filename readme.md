# NSE Live API Wrapper

A Node.js wrapper for the NSE India API, providing easy access to stock market data, including stock quotes, market status, trade information, and more.

## Installation

Install the package via npm:

```bash
npm install nse-api-package
```
## Usage
Here's how you can use the NSE Live API Wrapper in your project:
```bash
const {NSELive,NSEArchive} = require('nse-api-package');
const nseArchive = new NSEArchive();
const nseLive = new NSELive();
```
// Example: Fetching stock quote for a specific equity
```bash
nseLive.stockQuote('LT')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
// Example: Fetching data of all Indices
```bash
nseLive.allIndices()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
// Example: Fetching trade information for a specific equity
```bash
nseLive.tradeInfo('LT')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
// Example: Fetching live F&O data for a specific equity
```bash
nseLive.stockQuoteFNO('NIFTY')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
//Example: Fetch  chart data for the index 'NIFTY'
```bash
nseLive.chartData('NIFTY 50',true)
  .then(data => console.log(data));
  .catch(error => console.error(error));
```
//Example: Fetch  EOD data From NSE
```bash
nseArchive.downloadEodDataBetweenDates('15052024','20062024','./output')
  .then(data => console.log(data));
  .catch(error => console.error(error));
```
# API

```bash
nseLive.stockQuote(symbol)
```
Fetches stock quote information for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the stock quote data.
```bash
nseLive.marketStatus()
```
Fetches the current market status.

- Returns: A promise that resolves to the market status data.

```bash
nseLive.tradeInfo(symbol)
```
Fetches trade information for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the trade information data.

```bash
nseLive.stockQuoteFNO(symbol)
```
Fetches live F&O data for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the live F&O data.

```bash
nseLive.chartData(symbol)
```
Fetches chart data for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the chart data.

```bash
nseLive.marketTurnover(symbol)
```
Fetches marketTurnover for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
-Returns: A promise that resolves to the marketTurnover data.

```bash
nseLive.equityDerivativeTurnover(symbol)
```
Fetches equityDerivativeTurnover for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the equityDerivativeTurnover data.
```bash
nseLive.allIndices()
```
Fetches data of allIndices.

### Parameters:

- Returns: A promise that resolves to the allIndices data.
```bash
nseLive.liveIndex(symbol)
```
Fetches liveIndex for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the liveIndex data.
```bash
nseLive.indexOptionChain(symbol)
```
Fetches indexOptionChain for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the indexOptionChain data.

```bash
nseLive.equitiesOptionChain(symbol)
```
Fetches equitiesOptionChain for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the equitiesOptionChain data.

```bash
nseLive.currencyOptionChain(symbol)
```
Fetches currencyOptionChain for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the currencyOptionChain data.

```bash
nseLive.liveFNO(symbol)
```
Fetches liveFNO for the given symbol.

### Parameters:

- symbol (string): The stock symbol.
- Returns: A promise that resolves to the liveFNO data.

```bash
nseLive.preOpenMarket(category)
```
Fetches preOpenMarket for the given category.

### Parameters:

- category (string): The category symbol.[NIFTY,BANKNIFTY,SME,FO,OTHERS,ALL]

- Returns: A promise that resolves to the preOpenMarket data.
```bash
nseLive.holidayList()
```
Fetches holidayList for NSE.

### Parameters:

- Returns: A promise that resolves to the holidayList data.
```bash
nseArchive.downloadEodDataForDate(date, outputDir)
```
Fetches End of the day(EOD) data of stocks from NSE for the given date.

### Parameters:

- symbol (date, outputDir): date in the format ddmmyyyy [eg:2June2024 as '02062024'].outputDir for save the downloaded eod file [eg:'./output']

- Returns: A promise that downloads and save the EOD data for the given date

```bash
nseArchive.downloadEodDataBetweenDates(startDateStr, endDateStr, outputDir)
```
Fetches End of the day(EOD) data of stocks daily from NSE for the given period.

### Parameters:

- symbol (startDateStr, endDateStr, outputDir): date in the format ddmmyyyy [eg:2June2024 as '02062024'].outputDir for save the downloaded eodfile [eg:'./output']

- Returns: A promise that downloads and save the EOD data for a given period.
```bash
nseArchive.downloadTodayEodData(outputDir)
```
Fetches End of the day(EOD) data of stocks from NSE for today

### Parameters:

- symbol  (outputDir): outputDir for save the downloaded eodfile [eg:'./output']

- Returns: A promise that downloads and save the EOD data for today.


## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or support, please open an issue on the GitHub repository.

### Note: 
This package is not affiliated with or endorsed by NSE India.this package is created only for study purpose 