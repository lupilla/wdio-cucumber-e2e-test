Feature: File Upload Feature

  @interactions
  @fileupload
  Scenario Outline: File Upload Interactions
    Given A Web page with fileUpload input is opened
    When Perform file input interactions

    Examples:
      | TestID       |
      | UPLOAD_TC001 |