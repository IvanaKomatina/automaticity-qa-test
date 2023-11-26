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

const { faker } = require('@faker-js/faker')

Cypress.Commands.add('generateFixture', () => {

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

    cy.writeFile('cypress/fixtures/forms.json', {
        'firstName': faker.person.firstName(),
        'lastName': faker.person.lastName(),
        'email': faker.internet.email(),
        'gender': faker.number.int({ min: 0, max: 2 }),
        'mobile': faker.string.numeric(10),
        'date': faker.date.past(),
        'subject': 'Maths',
        'hobbies': faker.number.int({ min: 0, max: 2 }),
        'pictureName': 'dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
        'currentAddress': faker.location.streetAddress(),
        'state': 'NCR',
        'city': 'Delhi'
    })
})

Cypress.Commands.add('generateFixtureAPI', () => {

    cy.writeFile('cypress/fixtures/usersAPI.json', {
        'username': faker.person.firstName(),
        'password': faker.internet.password({prefix: '!'}),
        'invalidPassword': faker.internet.password(),
        'invalidPasswordNumeric': faker.string.numeric(8),
        'invalidPasswordLessThan8Characters': faker.string.numeric(7),
    })
})

import 'cypress-file-upload';