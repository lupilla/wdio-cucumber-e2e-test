import { Given, When } from "@cucumber/cucumber";

Given(/^A Web page with fileUpload input is opened$/, async function() {
  await browser.url("/upload");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform file input interactions$/, async function() {
  await browser.pause(1000);
  await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`);
  await $(`#file-submit`).click();
  
  await browser.pause(1000);
});