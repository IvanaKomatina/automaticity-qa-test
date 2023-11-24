const navigation = require("../page_object/navigation")
const webTablesPage = require("../page_object/webTablesPage")

describe('Edit Table', () => {

    beforeEach(() => {
        cy.generateFixture()
        cy.visit('')
        navigation.openWebTables()
    })

    it('Validate User is able to add a new table', () => {
        cy.fixture('newTable').then(editTableData => {
            webTablesPage.editTable(editTableData)
            webTablesPage.validateAllEnteredFieldAreVisibleInColumns(webTablesPage.tableColumnsFirstRow, editTableData)
        })
    })
})