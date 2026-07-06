.@Complaint @Tamilarasu
Feature: Tamilarasu K 17-05-2026 Raise Complaint Feature

Background:
  Given the user is on the home page
  When the user clicks on complaint

@ComplaintPositive
Scenario Outline: Submit complaint with different valid data

  And the user enters complaint details "<name>" "<email>" "<contact>" "<description>"
  And the user clicks submit button
  Then the complaint should be submitted successfully

Examples:
| name      | email                | contact    | description                         |
| Tamil     | tamil@gmail.com      | 9876543210 | Test Complaint                      |


@ComplaintNegative
Scenario Outline: Submit complaint with mandatory field validations

  And the user enters complaint details "<name>" "<email>" "<contact>" "<description>"
  And the user clicks submit button
  Then an error message should be displayed

Examples:
| name  | email            | contact    | description      |
|       | tamil@gmail.com  | 9876543210 | Test Complaint   |

