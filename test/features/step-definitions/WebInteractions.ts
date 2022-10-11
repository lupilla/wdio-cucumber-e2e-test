import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

Given(/^A Web page is opened$/, async function() {
  await browser.url("/inputs");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
  //await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async function() {
  /**
   * Actions:
      1. Type into input box
      2. Clear the field and type or just add value
      3. Click and type
      4. Slow typing
   */
  /* let element = await $('a[href="/inputs"]');
  await element.click(); */
  const numberValue = "12345";
  const numberSplitted = numberValue.split('');
  
  await browser.pause(1000);
  let inputElement = await $('input[type="number"]');

  await inputElement.setValue("222");
  await browser.pause(1000);
  
  await inputElement.clearValue();
  await browser.pause(1000);
  
  await inputElement.setValue("333");
  await browser.pause(1000);
  
  await inputElement.clearValue();
  await browser.pause(1000);
  
  await inputElement.setValue(numberValue);
  await browser.pause(1000);
  await inputElement.click();
  
  for (let char in numberSplitted) {
    await browser.keys(char);
    await browser.pause(1000);
  }
});