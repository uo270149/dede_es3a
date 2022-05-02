import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

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
      .goto("http://localhost:3000/Register", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('The user is already registered on the website', ({given,when,then}) => {
    
    let username:string;
    let password:string;

    given('Data from an existing user', () => {
      username = "user1"
      password = process.env.TESTPW1 as string
    });

    when('I fill the data in the form', async () => {
      await expect(page).toMatch('Registro')
      await expect(page).toFillForm('form[name="registro"]', {
        username: username,
        password: password,
        confirmpassword: password
      })

      await expect(page).toClick('button', { text: 'Registrarse' })
    });

    then('Error', async () => {
      await expect(page).toMatch('')
    });
  })


  test('Dont fill all the data in the form', ({given,when,then}) => {

    given('Nothing information', () => {
    });

    when('I dont fill the data in the form', async () => {
      await expect(page).toMatch('Registro')
      await expect(page).toClick('button', { text: 'Registrarse' })
    });

    then('Error', async () => {
      await expect(page).toMatch('')
    });
  })

  test('The user is not registered in the site', ({given,when,then}) => { 
      let username:string;
      let password:string;
  
      given('An unregistered user', () => {
        username = "newuser"
        password = process.env.TESTPW2 as string
      });
  
      when('I fill the data in the form and press submit', async () => {
        await expect(page).toMatch('Registro')
        await expect(page).toFillForm('form[name="registro"]', {
          username: username,
          password: password,
          confirmpassword: password
        })
        await expect(page).toClick('button', { text: 'Registrarse' })
      });
  
      then('A confirmation message should be shown in the screen', async () => {
        await expect(page).toMatch('')
      });
    })

  afterEach(async ()=>{
    browser.close()
  });

});
