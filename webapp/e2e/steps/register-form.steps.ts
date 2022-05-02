import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";
import { StringifyOptions } from 'querystring';

const apiEndPoint= process.env.REACT_APP_URI|| 'http://localhost:3000'

const feature = loadFeature('./features/Register.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  
  beforeEach(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page
      .goto(apiEndPoint + "/signup", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('The user is already registered on the website', ({given,when,then}) => {
    
    let username:string;
    let password:string;

    given('Data from an existing user', () => {
      username = "admin"
      password = "admin"
    });

    when('I fill the data in the form', async () => {
      await expect(page).toMatch('Registro')
      
      await expect(page).toFill('name', username);
      await expect(page).toFill('password', password);
      await expect(page).toFill('checkpassword', password);

      await expect(page).toClick('button', { text: 'Registrarse' })
    });

    then('Error', async () => {
      await expect(page).toMatch('Credenciales invalidas')
    });
  })


  test('Dont fill all the data in the form', ({given,when,then}) => {

    given('Nothing', () => {
    });

    when('I dont fill the data in the form', async () => {
      await expect(page).toMatch('Registro')
      await expect(page).toClick('button', { text: 'Registrarse' })
    });

    then('Error', async () => {
      await expect(page).toMatch('Credenciales invalidas')
    });
  })

  afterEach(async ()=>{
    browser.close()
  });


  afterEach(async ()=>{
    browser.close()
  });

});
