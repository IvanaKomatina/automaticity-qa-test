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

    get formsButton() {
        return cy.get('h5').contains('Forms')
    },

    get practiceForm() {
        return cy.get('span').contains('Practice Form')
    },

    get practiceFormTitle() {
        return cy.get('div[class="main-header"]')
    },

    get widgetsButton() {
        return cy.get('h5').contains('Widgets')
    },

    get progressBar() {
        return cy.get('span').contains('Progress Bar')
    },

    get progressBarTitle() {
        return cy.get('div[class="main-header"]')
    },

    openWebTables() {
        this.elementsButton.click()
        cy.url().should('include', '/elements')
        this.webTables.click()
        this.webTables.should('contain', 'Web Tables')
    },

    openPracticeForm() {
        this.formsButton.click()
        cy.url().should('include', '/forms')
        this.practiceForm.click()
        this.practiceFormTitle.should('have.text', 'Practice Form')
    },

    openProgressBar() {
        this.widgetsButton.click()
        cy.url().should('include', '/widgets')
        this.progressBar.click()
        this.progressBarTitle.should('have.text', 'Progress Bar')
    }
}
