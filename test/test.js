//import NSEArchive from './src/archive.js';
import {NSELive} from "nse-api-package";
const nse = new NSELive();
// nse.getEodDataForDate()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

nse.downloadTodayEodData( './output')
   .then(() => console.log('Download complete'))
  .catch(error => console.error(error));
// const date= new(Date)
// const formattedDate = `${date.getUTCDate()}${date.getUTCMonth() + 1}${date.getUTCFullYear()}`;

// console.log(formattedDate);
// Function to convert DDMMYYYY to Date object


