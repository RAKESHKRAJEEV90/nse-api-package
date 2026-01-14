const axios = require('axios');
const { wrapper } = require('axios-cookiejar-support');
const { CookieJar } = require('tough-cookie');
const { createWriteStream, existsSync, mkdirSync, unlinkSync } = require('fs');
const { join } = require('path');
class NSEArchive {
  constructor() {
    this.jar = new CookieJar();
    this.session = wrapper(
      axios.create({
        baseURL: 'https://nsearchives.nseindia.com',
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

  async downloadFile(url, outputPath) {
    const writer = createWriteStream(outputPath);
    const response = await this.session.get(url, { responseType: 'stream' });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  }

  async downloadEodDataForDate(date, outputDir) {
    const formattedDate = date.toString();
    const url = `/products/content/sec_bhavdata_full_${formattedDate}.csv`;
    const outputPath = join(outputDir, `eod_${formattedDate}.csv`);

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    try {
      await this.downloadFile(url, outputPath);
      console.log(`EOD data for ${formattedDate} saved to ${outputPath}`);
    } catch (error) {
      console.error(`Failed to download EOD data for ${formattedDate}: ${error.message}`);
      if (existsSync(outputPath)) {
        unlinkSync(outputPath);
      }
    }
  }

  static convertToDate(dateStr) {
    const day = parseInt(dateStr.slice(0, 2));
    const month = parseInt(dateStr.slice(2, 4)) - 1;
    const year = parseInt(dateStr.slice(4, 8));
    return new Date(year, month, day);
  }

  static formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}${month}${year}`;
  }

  static datesBetween(startDateStr, endDateStr) {
    const startDate = NSEArchive.convertToDate(startDateStr);
    const endDate = NSEArchive.convertToDate(endDateStr);
    const datesInBetween = [];

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      datesInBetween.push(NSEArchive.formatDate(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesInBetween;
  }

  async downloadEodDataBetweenDates(startDateStr, endDateStr, outputDir) {
    try {
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      const datesInBetween = NSEArchive.datesBetween(startDateStr, endDateStr);

      for (const date of datesInBetween) {
        await this.downloadEodDataForDate(date, outputDir);
        console.log(`Downloaded data for date: ${date}`);
      }

      console.log(`All EOD data files downloaded to ${outputDir}`);
    } catch (error) {
      console.error(`Failed to download EOD data: ${error.message}`);
    }
  }

  async downloadTodayEodData(outputDir) {
    const today = new Date();
    const formattedDate = NSEArchive.formatDate(today);

    try {
      await this.downloadEodDataForDate(formattedDate, outputDir);
      console.log(`Downloaded today's data for date: ${formattedDate}`);
    } catch (error) {
      console.error(`Failed to download today's EOD data for ${formattedDate}: ${error.message}`);
    }
  }


  async downloadSecurityBanned(outputDir) {
    const outputPath = join(outputDir, 'securitiesBanned.csv');
    const url = '/content/fo/fo_secban.csv';

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }
    try {
      await this.downloadFile(url, outputPath);
      console.log(` Data for securities Banned saved to ${outputPath}`);
    } catch (error) {
      console.error(`Failed to download Data for securities Banned: ${error.message}`);
      if (existsSync(outputPath)) {
        unlinkSync(outputPath);
      }
    }

  }


  async downloadParticipantwiseOi(outputDir, date) {
    const outputPath = join(outputDir, 'participantwise.csv');
    const url = `/content/nsccl/fao_participant_oi_${date}.csv`;

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }
    try {
      await this.downloadFile(url, outputPath);
      console.log(` Data for participantwise OI saved to ${outputPath}`);
    } catch (error) {
      console.error(`Failed to download Data for Participantwise OI: ${error.message}`);
      if (existsSync(outputPath)) {
        unlinkSync(outputPath);
      }
    }
  }

}



module.exports = NSEArchive;
