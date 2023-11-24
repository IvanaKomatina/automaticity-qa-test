const navigation = require("../page_object/navigation")
const addNewTablePage = require("../page_object/addNewTablePage")
const _ = require('lodash')

describe('Add New Table', () => {

    beforeEach(() => {
        cy.generateFixture()
        cy.visit('')
        navigation.openWebTables()
    })

    it('Validate User is able to add a new table', () => {
        cy.fixture('newTable').then(newTableData => {
            addNewTablePage.addNewTable(newTableData)
            addNewTablePage.validateAllEnteredFieldAreVisibleInColumns(newTableData)
        })
    })

    it('Validate User is not able to add a new table with empty fields', () => {
            addNewTablePage.addNewTable({})
            addNewTablePage.validateAllFieldsMustBeEntered()
    })

    it('Validate User is not able to add a new table with missing domen in email', () => {
        cy.fixture('newTable').then(newTableData => {
            const newTableDataWithInvalidEmail = _.clone(newTableData)
            newTableDataWithInvalidEmail.email = newTableDataWithInvalidEmail.invalidEmail
            addNewTablePage.addNewTable(newTableDataWithInvalidEmail)
            addNewTablePage.emailInput.should('match', ':invalid')
        })
    })

    it('Validate User is not able to add a new table with missing one input field', () => {
        cy.fixture('newTable').then(newTableData => {
            const newTableDataWithEmptyName = _.clone(newTableData)
            newTableDataWithEmptyName.firstName = ""
            addNewTablePage.addNewTable(newTableDataWithEmptyName)
            addNewTablePage.firstNameInput.should('match', ':invalid')
        })
    })

    it('Validate User is not able to add a new table with words in age and salary fields', () => {
        cy.fixture('newTable').then(newTableData => {
            const newTableDataWithInvalidAgeAndSalary = _.clone(newTableData)
            newTableDataWithInvalidAgeAndSalary.age = newTableDataWithInvalidAgeAndSalary.invalidAge
            newTableDataWithInvalidAgeAndSalary.salary = newTableDataWithInvalidAgeAndSalary.invalidSalary
            addNewTablePage.addNewTable(newTableDataWithInvalidAgeAndSalary)
            addNewTablePage.ageInput.should('match', ':invalid')
            addNewTablePage.salaryInput.should('match', ':invalid')
        })
    })

    it('Validate first name input can not be more than 25 characters', () => {
        cy.fixture('newTable').then(newTableData => {
            const newTableDataWithInvalidFirstName = _.clone(newTableData)
            newTableDataWithInvalidFirstName.firstName = newTableDataWithInvalidFirstName.invalidFirstName
            addNewTablePage.addNewTable(newTableDataWithInvalidFirstName)
            addNewTablePage.tableColumns.eq(1).invoke('text').then((text) => {
                expect(text).to.have.lengthOf(25)
            })
        })
    })
})