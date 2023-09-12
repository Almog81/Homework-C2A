# Homework-C2A Cypress Project

This Cypress project is designed to complete two specific tasks:

## Task 1: PDF Testing

In this task, we compare PDF files and assert their text content to ensure they match.

### Prerequisites

Before running this test, make sure you have the following installed:

- [Node.js](https://nodejs.org/)

### Running the PDF Test

1. Install project dependencies by running the following command in your project directory:

   `npm install`

2. Run the Cypress tests.

3. In the Cypress test runner, locate and click on the "task01-pdf.spec.js" test file to run the PDF comparison tests.

## Task 2: Web Testing with Page Objects

In this task, we automate the process of logging in to "https://www.demoblaze.com/" and purchasing the cheapest phone available using the Page Object pattern.

### Prerequisites

Before running this test, make sure you have the following installed:

- [Node.js](https://nodejs.org/)

### Running the Web Test

1. Install project dependencies by running the following command in your project directory:

   `npm install`

2. Run the Cypress tests.

3. In the Cypress test runner, locate and click on the "task02-web.spec.js" test file to run the web testing scenario.

### Packages Used

This project uses the following packages:

```json
"dependencies": {
  "cypress": "^13.1.0",
  "fs": "^0.0.1-security",
  "path": "^0.12.7",
  "pdf-parse": "^1.1.1"
}
