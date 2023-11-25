const moment = require("moment")

module.exports = {

    get firstNameInput() {
        return cy.get('input[id="firstName"]')
    },

    get lastNameInput() {
        return cy.get('input[id="lastName"]')
    },

    get emailInput() {
        return cy.get('input[id="userEmail"]')
    },

    get chooseGander() {
        return cy.get('div[id="genterWrapper"] label[class="custom-control-label"]')
    },

    get mobileNumberInput() {
        return cy.get('input[id="userNumber"]')
    },

    get dateOfBirthInput() {
        return cy.get('input[id="dateOfBirthInput"]')
    },

    get monthFromCalendar() {
        return cy.get('select[class="react-datepicker__month-select"]')
    },

    get yearFromCalendar() {
        return cy.get('select[class="react-datepicker__year-select"]')
    },

    get dayFromCalendar() {
        return cy.get('div[class~="react-datepicker__day"]')
    },

    get subjectsInput() {
        return cy.get('input[id="subjectsInput"]')
    },

    get chooseSubject() {
        return cy.get('div[id^="react-select-2-option"]')
    },

    get chooseHobbies() {
        return cy.get('div[id="hobbiesWrapper"] label[class="custom-control-label"]')
    },

    get currentAddressInput() {
        return cy.get('textarea[id="currentAddress"]')
    },

    get openStateDropdown() {
        return cy.get('div[id="state"]')
    },

    get chooseState() {
        return cy.get('div[id^="react-select-3-option"]')
    },

    get openCityDropdown() {
        return cy.get('div[id="city"]')
    },

    get chooseCityDropdown() {
        return cy.get('div[id^="react-select-4-option"]')
    },

    get submitButton() {
        return cy.get('button[id="submit"]')
    },

    get formRows() {
        return cy.get('table[class~="table"] tbody tr td:nth-child(2)')
    },

    get selectImage() {
        return cy.get('input[id="uploadPicture"]')
    },

    submitForm({ firstName = "", lastName = "", email = "", mobile = "", gender = "", subject = "", hobbies = "", pictureName = "", currentAddress = "", date = "", state = "", city = "" }) {
        if(firstName) {
            this.firstNameInput.type(firstName)
        }

        if(lastName) {
            this.lastNameInput.type(lastName)
        }

        if(email) {
            this.emailInput.type(email)
        }

        this.chooseGander.eq(gender).click()

        if(mobile) {
            this.mobileNumberInput.type(mobile)
        }

        const dateInstance = new Date(date)
        this.dateOfBirthInput.click()
        this.monthFromCalendar.select(dateInstance.getMonth())
        this.dayFromCalendar.contains(new RegExp("^" + dateInstance.getDate() + "$", "g")).click()

        if(subject) {
            this.subjectsInput.type(subject)
        }

        this.chooseSubject.contains(subject).click()

        this.chooseHobbies.eq(hobbies).click()

        this.selectImage.attachFile('images/' + pictureName)

        if(currentAddress) {
            this.currentAddressInput.type(currentAddress)
        }

        this.openStateDropdown.click()

        this.chooseState.contains(state).click()
        this.openCityDropdown.click()
        this.chooseCityDropdown.contains(city).click()
        this.submitButton.click()
    },

    validateFormIsSubmited({ firstName, lastName, email, gender, mobile, date, subject, hobbies, pictureName, currentAddress, state, city }) {
        this.formRows.eq(0).should('have.text', firstName + " " + lastName)
        this.formRows.eq(1).should('have.text', email)

        if(gender === 0) {
            this.formRows.eq(2).should('have.text', 'Male')
        } else if (gender === 1) {
            this.formRows.eq(2).should('have.text', 'Female')
        } else {
            this.formRows.eq(2).should('have.text', 'Other')
        }

        this.formRows.eq(3).should('have.text', mobile)

        const formattedDate = moment(date).format('DD MMMM,YYYY')
        this.formRows.eq(4).should('have.text', formattedDate)
        this.formRows.eq(5).should('have.text', subject)

        if(hobbies === 0) {
            this.formRows.eq(6).should('have.text', "Sports")
        } else if (hobbies === 1) {
            this.formRows.eq(6).should('have.text', 'Reading')
        } else {
            this.formRows.eq(6).should('have.text', 'Music')
        }

        this.formRows.eq(7).should('have.text', pictureName)

        this.formRows.eq(8).should('have.text', currentAddress)
        this.formRows.eq(9).should('have.text', state + " " + city)
    }
}
