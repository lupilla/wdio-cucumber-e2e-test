Feature: Windows Handling Feature

  @interactions
  @windowshandling
  Scenario Outline: Windows Handling
    Given A Web page with a link to other window is opened
    When Perform windows interactions

    Examples:
      | TestID       |
      | WINDOW_TC001 |