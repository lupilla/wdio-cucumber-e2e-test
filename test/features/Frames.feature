Feature: Frames feature

  @interactions
  @frames
  Scenario Outline: Frames feature
    Given Page with frames is opened
    When Perform web interactions with frames

    Examples:
      | TestID       |
      | FRAMES_TC001 |