const puppeteer = require('puppeteer');

describe('Card Validator', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/dist/index.html');
  });

  afterAll(() => {
    browser.close();
  });

  test('should display validation result when form is submitted', async () => {
    await page.type('#cardNumber', '4532015112830366');
    await page.click('input[type="submit"]');
    await page.waitForSelector('.validationResult.show');
    const result = await page.$eval('.validationResultText', el => el.textContent);
    expect(result).toBe('Номер карты действителен!');
  });

  test('should display card type when card number is input', async () => {
    await page.type('#cardNumber', '4532015112830366');
    const cardTypeElement = await page.$('.cardTypeSelect');
    expect(cardTypeElement).toBeTruthy();
  });
});
