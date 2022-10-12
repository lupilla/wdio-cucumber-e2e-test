Feature: Search feature

  @interactions
  @inputtext
  Scenario Outline: Search feature
    Given Google page with a search field is opened
    When Search with <SearchItem>
    Then Click on the first search result
    Then URL should match <ExpectedURL>

    Examples:
      | TestID     | SearchItem | ExpectedURL           |
      | DEMO_TC001 | WDIO       | https://webdriver.io/ |