const navigation = require("../page_object/navigation")
const progressBarPage = require("../page_object/progressBarPage")

describe('Progress Bar', () => {

    beforeEach(() => {
        cy.visit('')
        navigation.openProgressBar()
    })

    it('Validate progress bar is working correctly when we click on start button', () => {
        progressBarPage.validateProgressBarIsIncreasedWhenWeClickOnStartButton()
    })

    it('Validate progress bar is working correctly when progress bar is stoped', () => {
        progressBarPage.validateProgressBarIsNotChangingWhenWeAreNotClickingOnStartButton()
    })

    it.only('Validate progress bar is working correctly when progress bar reached hundred percent', () => {
        progressBarPage.waitForProgressBarReachMax()
        progressBarPage.validateProgressBarHasDesiredValue(100)
    })

    it.only('Validate progress bar is working correctly when progress bar is reseted', () => {
        progressBarPage.waitForProgressBarReachMax()
        progressBarPage.resetButton.click()
        progressBarPage.validateProgressBarHasDesiredValue(0)
    })
})
