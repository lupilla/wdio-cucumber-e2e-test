import { Given, When } from "@cucumber/cucumber";
import { expect } from "chai";

/**
 * Web table:
    1. Check number of rows and columns
    2. Get whole table data
    3. Get single row [based on a condition]
    4. Get single column
    5. Get single cell value [based on another cell]
*/
Given(/^Page with a table is opened$/, async function() {
  await browser.url("/tables");
  await browser.setTimeout({
    implicit: 15000,
    pageLoad: 10000
  });
});

When(/^Perform table interactions$/, async function() {
  /**
   * 1. Check number of rows and columns
  */
  await browser.pause(1000);
  
  const totalRows = await $$(`//table[@id="table1"]/tbody/tr`).length;
  expect(totalRows).to.equal(4);
  const totalColumns = await $$(`//table[@id="table1"]/thead/tr/th`).length;
  expect(totalColumns).to.equal(6);

  /**
   * 2. Get whole table data
  */
  let cellValues = [];
  let columnFields = ['lastname', 'firstname', 'email', 'due', 'website', 'action'];
  let personObject = {};
  let columnField = '';
  let cellValue = '';
  for (let i = 0; i < totalRows; i++) {
    personObject = {};
    for (let j = 0; j < totalColumns; j++) {
      columnField = columnFields[j];
      cellValue = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
      personObject = {...personObject, [columnField]: cellValue};
    }
    cellValues = [...cellValues, personObject];
  }
  expect(cellValues.length).to.equal(totalRows);
  expect(Object.keys(cellValues[0]).length).to.equal(totalColumns);
  
  /**
   * 3. Get single row [based on a condition]
  */
  let result = [];
  let selectedPersonObject = {};
  for (let i = 0; i < totalRows; i++) {
    selectedPersonObject = {};
    for (let j = 0; j < totalColumns; j++) {
      let firstname = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
      if (firstname  === 'Jason') {
        columnField = columnFields[j];
        cellValue = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
        selectedPersonObject = {...selectedPersonObject, [columnField]: cellValue};
      }
    }
    //if(selectedPersonObject.firstname) { ==> with object initialization!!
    if(Object.entries(selectedPersonObject).length) {
      result = [...result, selectedPersonObject];
    }
  }
  //console.log(result);
  expect(Object.keys(result[0]).length).to.equal(totalColumns);
  expect(result.length).to.equal(1);
  
  /**
   * 4. Get single column
  */
  let singleColumn = [];
  let columnValues = {};
  let due = '';
  let name = '';
  for (let i = 0; i < totalRows; i++) {
    name = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
    due = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
    columnValues = { name, due };
    singleColumn = [...singleColumn, columnValues];
  }
  //console.log(singleColumn);
  expect(singleColumn.length).to.equal(4);
  expect(Object.keys(singleColumn[2]).length).to.equal(2);
  /**
   * 5. Get single cell value [based on another cell]
  */
  let rowsCriteria = [];
  let personCriteria = {};
  let dueCriteria = '';
  for (let i = 0; i < totalRows; i++) {
    personCriteria = {};
    for (let j = 0; j < totalColumns; j++) {
      dueCriteria = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
      if (parseFloat(dueCriteria.replace('$', '')) > 50) {
        columnField = columnFields[j];
        cellValue = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
        personCriteria = {...personCriteria, [columnField]: cellValue};
      }
    }
    if(Object.entries(personCriteria).length) {
      rowsCriteria = [...rowsCriteria, personCriteria];
    }
  }
  //console.log(`rowsCriteria: ${JSON.stringify(rowsCriteria)}`);
  console.log(`cells value: ${JSON.stringify(cellValues)}`);
  console.log(`filtered ${JSON.stringify(cellValues.filter((person) => parseFloat(person.due.replace('$', '')) > 50))}`);
  expect(rowsCriteria.length).to.equal(2);

});