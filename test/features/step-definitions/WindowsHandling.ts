import { Given, When } from "@cucumber/cucumber";
import { expect } from "chai";

/**
   * Steps:
      1. Launch the browser
      2. Open another windows
      3. Switch to the window based on title
      4. Switch back to the main window
      
   * Methods used:
      1. getTitle()
      2. getWindowHandle()
      3. getWindowHandles()
      4. switchToWindow()
   */

Given(/^A Web page with a link to other window is opened$/, async function() {
  await browser.url("/windows");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform windows interactions$/, async function() {

  //const seleniumLink = await $('a[href="http://elementalselenium.com/"]');
  const seleniumLink = await $(`=Click Here`);
  await seleniumLink.click();
  await browser.pause(1000);
  
  //const newWindow = await $('a[href="/windows/new"]');
  const newWindow = await $(`=Elemental Selenium`);
  await newWindow.click();
  await browser.pause(1000);
  
  let currentWindowTitle = await browser.getTitle();  
  let parentWindow = await browser.getWindowHandle();
  let windowTitle = "";
  let headerText = "";
  
  const allWindows = await browser.getWindowHandles();
  const title = "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro";
  
  for await (let item of allWindows) {
    await browser.switchToWindow(item);
    currentWindowTitle = await browser.getTitle();
    if (currentWindowTitle === title) {
      await browser.switchToWindow(item);
      windowTitle = await browser.getTitle();
      headerText = await $('<h1>').getText();
    }
  }
  await browser.pause(1000);
  
  await browser.switchToWindow(parentWindow);
  let parentWindowHeaderText = await $('<h3>').getText();
  
  expect(windowTitle).to.be.equal(title);
  expect(headerText).to.be.equal("Elemental Selenium");
  expect(parentWindowHeaderText).to.be.equal("Opening a new window");

});