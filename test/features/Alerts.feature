Feature: Alerts Feature

  @interactions
  @alerts
  Scenario Outline: Alerts interactions
    Given A Web page with pop ups is opened
    When Perform web interactions with pop ups

    Examples:
      | TestID       |
      | ALERTS_TC001 |