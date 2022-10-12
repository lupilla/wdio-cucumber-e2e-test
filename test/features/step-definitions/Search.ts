import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

Given(/^Google page with a search field is opened$/, async function() {
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  let element = await $(`#L2AGLb`);
  await element.click();
  await browser.pause(1000);
  //console.log(`After opening browser`);
  //console.log(`Browser: ${JSON.stringify(browser)}`);
});

When(/^Search with (.*)$/, async function(searchItem) {
  let element = await $(`[name="q"]`);
  await element.setValue(searchItem);
  await browser.keys("Enter");
  //console.log(`Element: ${JSON.stringify(element)}`);
});

Then(/^Click on the first search result$/, async function() {
  let element = await $(`<h3>`);
  element.click();
});

Then(/^URL should match (.*)$/, async function(expectedURL) {
  await browser.waitUntil(async function() {
    //return await $('selector').isDisplayed....
    return await browser.getTitle () === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  }, {timeout: 20000, interval: 500, timeoutMsg: `Fail loading WDIO web page ${await browser.getTitle()}`});
  let browserURL = await browser.getUrl();
  expect(browserURL).to.equal(expectedURL);
});
