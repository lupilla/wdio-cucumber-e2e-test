Feature: Checkbox Feature

  @interactions
  @checkbox
  Scenario Outline: Checkbox interactions
    Given A Web page with checkbox is opened
    When Perform web interactions with checkboxes

    Examples:
      | TestID         |
      | CHECKBOX_TC001 |