Feature: Tables feature

  @interactions
  @tables
  Scenario Outline: Tables feature
    Given Page with a table is opened
    When Perform table interactions

    Examples:
      | TestID       |
      | TABLE_TC001  |