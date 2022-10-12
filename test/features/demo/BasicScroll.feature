Feature: Basic Scroll feature

  @scroll
  Scenario Outline: Basic Scroll feature
    Given Page with scroll is opened
    When Perform basic scroll interactions

    Examples:
      | TestID       |
      | SCROLL_TC001 |