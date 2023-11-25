const navigation = require("../page_object/navigation")
const webTablesPage = require("../page_object/webTablesPage")

describe('Edit Table', () => {

    it('Validate User is able to edit table', () => {
        cy.generateFixture()
        cy.visit('')
        navigation.openWebTables()
        cy.fixture('newTable').then(editTableData => {
            webTablesPage.editTable(editTableData)
            webTablesPage.validateAllEnteredFieldAreVisibleInColumns(webTablesPage.tableColumnsFirstRow, editTableData)
        })
    })
})