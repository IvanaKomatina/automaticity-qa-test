// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('generateFixture', () => {
    const { faker } = require('@faker-js/faker')

    cy.writeFile('cypress/fixtures/newTable.json', {
        'firstName': faker.person.firstName(),
        'lastName': faker.person.lastName(),
        'email': faker.internet.email(),
        'age': faker.string.numeric({ min: 18, max: 99 }),
        'salary': faker.string.numeric({ min: 40000, max: 100000 }),
        'department': faker.commerce.department(),
        'invalidEmail': faker.string.alpha(),
        'invalidAge': faker.string.alpha(),
        'invalidSalary':faker.string.alpha(),
        'invalidFirstName': faker.string.alphanumeric(50)
    })
})