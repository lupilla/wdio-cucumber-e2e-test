Feature: Input Number Feature

  @interactions
  @inputnumber
  Scenario Outline: Input Number Interactions
    Given A Web page with input text is opened
    When Perform input text interactions

    Examples:
      | TestID    |
      | WEB_TC001 |