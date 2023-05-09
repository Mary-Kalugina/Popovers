import puppeteer from 'puppeteer';
import {fork} from 'child_process';

jest.setTimeout(30000); 

describe('Card input form', () => {
  let browser;
  let page;
  let server = null;
  const baseUrl = 'http://localhost:9001'

    beforeAll(async () => {
      server = fork(`${__dirname}/e2e.server.js`);
      await new Promise((resolve, reject) => {
        server.on('error', reject);
        server.on('message', (message) => {
          if (message === 'ok') {
            resolve();
          }
        });
      });

      browser = await puppeteer.launch({
        headless: false,
        slowMo: 500,
        devtools: true,
      });
      page = await browser.newPage();
      await page.goto(baseUrl);
      });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should show popover when button is clicked', async () => {
    const button = await page.$('.button');
    await button.click();

    const popover = await page.waitForSelector('.popover');
    expect(popover).toBeTruthy();
  });

  test('should hide popover when button is clicked again', async () => {
    const button = await page.$('.button');

    expect(await page.$eval(".popover", (e) => (e ? true : false))).toBe(true);
    // const popover = await page.$('.popover');
    
    await button.click();
    await page.waitForTimeout(1000);
   expect(await page.$(".popover")).toBe(null);
  });  
});
