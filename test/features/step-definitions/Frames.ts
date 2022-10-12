import { Given, When } from "@cucumber/cucumber";

Given(/^Page with frames is opened$/, async function() {
  await browser.url("/frames");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform web interactions with frames$/, async function() {
  /**
   * Methods used:
      1. switchToFrame()
      2. switchToParentFrame()
  */
  await browser.pause(1000);
  await $(`a[href="/iframe"]`).click();
  await browser.pause(1000);
  const element = await $(`#mce_0_ifr`);
  await browser.switchToFrame(element);
  await browser.pause(1000);
  await await $(`#tinymce`).click();
  await browser.pause(1000);
  await browser.keys(["Meta", "A"]);
  await browser.pause(1000);
  await browser.keys("Delete");
  await browser.pause(1000);
  await $(`#tinymce`).setValue(`Typing into a frame...`);
  await browser.pause(1000);
  await $(`#tinymce`).addValue(` and adding some more text...`);
  await browser.keys(["Meta", "A"]);
  await browser.pause(1000);
  await browser.keys("Delete");
  await browser.switchToParentFrame();
  await browser.pause(1000);
  
});