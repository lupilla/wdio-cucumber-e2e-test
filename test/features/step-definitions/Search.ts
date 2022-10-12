import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

Given(/^Google page with a search field is opened$/, async function() {
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  let element = await $(`#L2AGLb`);
  await element.click();
  await browser.pause(1000);
});

When(/^Search with (.*)$/, async function(searchItem) {
  let element = await $(`[name="q"]`);
  await element.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function() {
  let element = await $(`<h3>`);
  element.click();
});

Then(/^URL should match (.*)$/, async function(expectedURL) {
  let browserURL = await browser.getUrl()
  expect(browserURL).to.equal(expectedURL);
});
