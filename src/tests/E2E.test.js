import { launch } from "puppeteer";

describe("Card Validator", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch();
    page = await browser.newPage();
    await page.goto("https://leavethepast.github.io/JS_Card_Validator/");
  });

  afterAll(() => {
    browser.close();
  });

  test("should display validation result when form is submitted", async () => {
    await page.type("#cardNumber", "4532015112830366");
    await page.click('input[type="submit"]');
    await page.waitForSelector(".validationResult.show");
    const result = await page.$eval(
      ".validationResultText",
      (el) => el.textContent
    );
    expect(result).toBe("Номер карты действителен!");
  });

  test("should display card type when card number is input", async () => {
    await page.type("#cardNumber", "4532015112830366");
    const cardTypeElement = await page.$(".cardTypeSelect");
    expect(cardTypeElement).toBeTruthy();
  });
});
