Feature: Basic Scroll feature

  @interactions
  @basicscroll
  Scenario Outline: Basic Scroll feature
    Given Page with scroll is opened
    When Perform basic scroll interactions

    Examples:
      | TestID       |
      | SCROLL_TC001 |