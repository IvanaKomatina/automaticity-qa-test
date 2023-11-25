module.exports = {

    get progressBar() {
        return cy.get('div[id="progressBar"] div')
    },

    get startStopButton() {
        return cy.get('button[id="startStopButton"]')
    },

    get resetButton() {
        return cy.get('button[id="resetButton"]')
    },

    validateProgressBarIsIncreasedWhenWeClickOnStartButton() {
        this.progressBar.invoke('text').as('progressBarOnStartInPercent')
        this.startStopButton.click()
        cy.wait(3000)
        this.startStopButton.click()
        this.progressBar.invoke('text').as('progressBarAfterThreeSecondsInPercent')
        cy.wrap({}).then(function () {
            const progressBarOnStartInt = Number(this.progressBarOnStartInPercent.slice(0, -1))
            const progressBarAfterThreeSecondsInt = Number(this.progressBarAfterThreeSecondsInPercent.slice(0, -1))
            cy.expect(progressBarOnStartInt).to.be.lessThan(progressBarAfterThreeSecondsInt)
        })
    },

    validateProgressBarIsNotChangingWhenWeAreNotClickingOnStartButton() {
        this.startStopButton.click()
        cy.wait(3000)
        this.startStopButton.click()
        this.progressBar.invoke('text').as('progressBarAfterStopInPercent')
        cy.wait(3000)
        this.progressBar.invoke('text').as('progressBarAfterThreeSecondsWithoutStartingInPercent')
        cy.wrap({}).then(function () {
            const progressBarAfterStopInt = Number(this.progressBarAfterStopInPercent.slice(0, -1))
            const progressBarAfterThreeSecondsWithoutStartingInt = Number(this.progressBarAfterThreeSecondsWithoutStartingInPercent.slice(0, -1))
            cy.expect(progressBarAfterStopInt).to.be.eq(progressBarAfterThreeSecondsWithoutStartingInt)
        })
    },

    waitForProgressBarReachMax() {
        this.startStopButton.click()
        cy.wait(11000)
    },

    validateProgressBarHasDesiredValue(expectedValue) {
        this.progressBar.should('have.text', expectedValue + "%")
        if (expectedValue === 100) {
            this.progressBar.should('have.css', 'background-color', 'rgb(40, 167, 69)')
            this.resetButton.should('be.visible')
        } else {
            this.progressBar.should('have.css', 'background-color', 'rgb(23, 162, 184)')
            this.resetButton.should('not.exist')
        }
    }
}
