Feature: Basic Auth Feature

  @basicauth
  Scenario Outline: Basic Auth interaction
    Given A Web page with basic login is opened
    When Perform web interactions with basic login

    Examples:
      | TestID      |
      | LOGIN_TC001 |