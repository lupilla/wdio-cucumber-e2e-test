Feature: Web Interactions Feature

  @webinteractions
  Scenario Outline: Demo Web Interactions
    Given A Web page is opened
    When Perform web interactions

    Examples:
      | TestID    |
      | WEB_TC001 |