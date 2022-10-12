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
  await browser.pause(1000);
  await (await $(`#page-footer`)).scrollIntoView();
  //If you want to get the element at the bottom, use false:
  //await (await $(`#page-footer`)).scrollIntoView(false);
  await browser.pause(1000);
});