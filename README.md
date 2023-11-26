# Automaticity QA test

## Project structure
End-to-End tests are located in `.cy.js` files inside `cypress/e2e` directory and API tests are located in `.cy.js` files inside `cypress/e2e/API` directory.

## Setup End-to-End tests (Cypress)
### 1. Clone the repository
```
git clone git@github.com:IvanaKomatina/automaticity-qa-test.git
```
### 2. Install dependencies
```
npm install
```
### 3. Run all tests

headed run
```
npm run cypress-run-headed
```

headless run
```
npm run cypress-run-headless
```
### 4. Run specific tests
headed run specific tests
```
npm run cypress-run-headed --spec=cypress/e2e/01-addNewTable.cy.js
```
headless run specific tests
```
npm run cypress-run-headless --spec=cypress/e2e/01-addNewTable.cy.js
```