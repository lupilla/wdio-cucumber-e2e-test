import { Given, When } from "@cucumber/cucumber";
import { expect } from "chai";

Given(/^A Web page with a dropdown element is opened$/, async function() {
  await browser.url("/dropdown");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform web interactions with dropdown$/, async function() {
  /**
   * Actions:
      1. Assert default option is selected
      2. Select by attribute, text, index
      3. Get a list of options
   */

  let element = await $('#dropdown option[selected="selected"]');
  let value = await element.getText();
  const text = "Please select an option";
  expect(value).to.equal(text);
  
  const dropdown = await $('#dropdown');
  //await dropdown.selectByVisibleText("Option 1");
  await browser.pause(1000);
  //await dropdown.selectByAttribute("value", "1");
  await dropdown.selectByIndex(1);
  await browser.pause(1000);
  element = await $('#dropdown option[selected="selected"]');
  value = await element.getText();
  expect(value).to.equal("Option 1");
  
  let options = await $$("select > option");
  options.forEach(async (option) => {
    console.log(await option.getText());
  });
  
});