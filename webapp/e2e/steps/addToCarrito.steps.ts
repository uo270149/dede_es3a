import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/addToCarrito.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: false, slowMo:1000 });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('Usuario no loggeado añade carrito', ({given,when,then}) => {

    given('Dado un usuario no loggeado', () => {
    });

    when('Añado producto a carrito', async () => {
    await page.setViewport({ width: 1200, height: 1300 });
    //Click en primer elemento
      //await expect(page).toClick("a[href='/Details?id=9z'");
      await page
      .goto("http://localhost:3000/Details?id=9z", {
        waitUntil: "networkidle0",
      })
    //Añade a carrito
      await page.setViewport({ width: 1200, height: 1300 });

      await expect(page).toClick('button', { text: 'Añadir al carrito' });
      
      page.on('dialog', async dialog => {
        //get alert message
        console.log(dialog.message());
        //accept alert
        await dialog.accept();
     })
      await expect(page).toClick("a[href='/Cart'");
    });

    then('Se ve en el carrito', async () => {
      await expect(page).toMatch('Adidas Equipment Support 93');
    });
  })

  afterAll(async ()=>{
    browser.close()
  })

});