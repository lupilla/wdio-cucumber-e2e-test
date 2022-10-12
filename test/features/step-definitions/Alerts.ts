import { Given, When } from "@cucumber/cucumber";

Given(/^A Web page with pop ups is opened$/, async function() {
  await browser.url("/javascript_alerts");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform web interactions with pop ups$/, async function() {
  /**
   * Methods used:
      1. isAlertOpen()
      2. acceptAlert()
      3. dismissAlert()
      4. getAlertText()
      5. sendAlertText()
   */

  await $(`button=Click for JS Alert`).click();
  await browser.pause(1000);
  if (browser.isAlertOpen()) {
    await browser.acceptAlert();
  }
  await browser.pause(1000);
  
  await $(`button=Click for JS Confirm`).click();
  await browser.pause(1000);
  if (browser.isAlertOpen()) {
    await browser.dismissAlert();
  }
  await browser.pause(1000);
  
  await $(`button=Click for JS Prompt`).click();
  await browser.pause(1000);
  if (browser.isAlertOpen()) {
    let alertText = await browser.getAlertText();
    console.log(alertText);
    await browser.sendAlertText('Hello JS Prompt...');
    await browser.acceptAlert();
  }
  await browser.pause(1000);
  
});