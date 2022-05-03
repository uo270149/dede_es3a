import { defineFeature, loadFeature } from "jest-cucumber";
import puppeteer from "puppeteer";

const feature = loadFeature("./features/get-products.feature");

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, (test) => {
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});

    /*page.on("request", (interceptedRequest) => {
      console.log(interceptedRequest.url());
    });*/
  });

  test("User enters the webpage", ({ given, when, then }) => {
    given("Homepage", async () => {
    });

    when("Click a product", async () => {
      await page.goto("http://localhost:3000/Details?id=9z");
      expect(page.url()).toContain("/Details?id=9z");
      await delay(1000);
    });

    then("Details from product", async () => {
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain("Adidas Equipment Support 93");
      expect(text).toContain("Zapatilla");
      expect(text).toContain("35.99");
    });
  });
});

afterAll(async () => {
  browser.close();
});

function delay(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}