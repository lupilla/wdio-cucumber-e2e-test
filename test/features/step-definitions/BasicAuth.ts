import { Given, When } from "@cucumber/cucumber";

//baseURL in wdio.conf.ts could be:
//baseUrl: 'https://admin:admin@the-internet.herokuapp.com',
Given(/^A Web page with basic login is opened$/, async function() {
  await browser.url("/basic_auth");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform web interactions with basic login$/, async function() {
  
  await browser.pause(5000);
  
});