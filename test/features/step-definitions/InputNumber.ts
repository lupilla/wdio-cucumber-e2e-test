import { Given, When } from "@cucumber/cucumber";

Given(/^A Web page with input text is opened$/, async function() {
  await browser.url("/inputs");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
  //await browser.maximizeWindow();
});

When(/^Perform input text interactions$/, async function() {
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
  await inputElement.click();
  await browser.pause(1000);
  
  for (let char in numberSplitted) {
    await browser.keys(char);
  }
  await browser.pause(1000);
});