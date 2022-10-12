import { Given, When } from "@cucumber/cucumber";
import { expect } from "chai";

Given(/^A Web page with checkbox is opened$/, async function() {
  await browser.url("/checkboxes");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform web interactions with checkboxes$/, async function() {
  /**
   * Actions:
      1. Select an option
      2. Unselect an option (if selected)
      3. Assert if option is selected
      4. Select all options
   */

  let element = await $('//form[@id="checkboxes"]/input[1]');
  await element.click();
  await browser.pause(1000);
  
  element = await $('//form[@id="checkboxes"]/input[1]');
  if(!element.isSelected) {
    await element.click();
  }
  await browser.pause(1000);
  
  element = await $('//form[@id="checkboxes"]/input[2]');
  const isChecked = await element.isSelected();
  expect(isChecked).to.be.true;
  
  const allOptions = await $$('//form[@id="checkboxes"]/input');
  
  await browser.pause(1000);
  
  allOptions.forEach(async (option) => {
    if(option.isSelected) {
      await option.click();
    }
  });
  
  await browser.pause(1000);
  
  allOptions.forEach(async (option) => {
    if(!option.isSelected) {
      await option.click();
    }
  });
  
  await browser.pause(1000);
});