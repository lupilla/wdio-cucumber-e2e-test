import { Given, When } from "@cucumber/cucumber";

Given(/^Page with scroll is opened$/, async function() {
  await browser.url("/");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform basic scroll interactions$/, async function() {
  /**
   * Methods used:
      1. scrollIntoView()
  */
  await browser.pause(2000);
  await (await $(`#page-footer`)).scrollIntoView();
  //If you want to get the element at the bottom, use false flag:
  //await (await $(`#page-footer`)).scrollIntoView(false);
  await browser.pause(2000);
  
  await (await $(`<h1>`)).scrollIntoView();
  await browser.pause(2000);
  
  //Advanced scrolling:
  //Scroll to Bottom:
  await browser.execute(() => {
    window.scrollBy(0, window.innerHeight);
  })
  await browser.pause(2000);
  
  //Scroll to Top:
  await browser.execute(() => {
    window.scrollBy(0, -window.innerHeight);
  })
  await browser.pause(2000);
  
  //scrollTo: To bottom
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  })
  await browser.pause(2000);
  
  //scrollTo: To top
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollTop);
  })
  await browser.pause(2000);
});