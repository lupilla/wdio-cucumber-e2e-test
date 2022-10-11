Feature: Select Interactions Feature

  @selectinteractions
  Scenario Outline: Select Interactions
    Given A Web page with a dropdown element is opened
    When Perform web interactions with dropdown

    Examples:
      | TestID       |
      | SELECT_TC001 |