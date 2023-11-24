module.exports = {

    get elementsButton() {
        return cy.get('h5').contains('Elements')
    },

    get webTables() {
        return cy.get('span').contains('Web Tables')
    },

    get webTablesTitle() {
        return cy.get('div[class="main-header"]')
    },

    openWebTables() {
        this.elementsButton.click()
        cy.url().should('include', '/elements')
        this.webTables.click()
        this.webTables.should('contain', 'Web Tables')
    }
}
