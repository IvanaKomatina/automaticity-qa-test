const navigation = require("../page_object/navigation")
const practiceFormPage = require("../page_object/practiceFormPage")

describe('Submit form', () => {

    it('Validate User is able to submit the form', () => {
        cy.generateFixture()
        cy.visit('')
        navigation.openPracticeForm()
        //Resolution is changed because of adds on website. Adds are covering a state and city dropdown
        cy.viewport(1920, 1080)
        cy.fixture('forms').then(submitForm => {
            practiceFormPage.submitForm(submitForm)
            practiceFormPage.validateFormIsSubmited(submitForm)
        })
    })
})