module.exports = {

    get addNewTableButton() {
        return cy.get('button[id="addNewRecordButton"]')
    },

    get firstNameInput() {
        return cy.get('input[id="firstName"]')
    },

    get lastNameInput() {
        return cy.get('input[id="lastName"]')
    },

    get emailInput() {
        return cy.get('input[id="userEmail"]')
    },

    get ageInput() {
        return cy.get('input[id="age"]')
    },

    get salaryInput() {
        return cy.get('input[id="salary"]')
    },

    get departmentInput() {
        return cy.get('input[id="department"]')
    },

    get submitButton() {
        return cy.get('button[id="submit"]')
    },

    get tableColumnsFourthRow() {
        return cy.get('div[class="rt-tbody"] div[class="rt-tr-group"]:nth-child(4) div')
    },

    get tableColumnsFirstRow() {
        return cy.get('div[class="rt-tbody"] div[class="rt-tr-group"]:nth-child(1) div')
    },

    get editTableButton() {
        return cy.get('span[id="edit-record-1"]')
    },

    addNewTable({ firstName = "", lastName = "", email = "", age = "", salary = "", department = "" }) {
        this.addNewTableButton.click()
        if(firstName) {
            this.firstNameInput.type(firstName)
        }

        if(lastName) {
            this.lastNameInput.type(lastName)
        }

        if(email) {
            this.emailInput.type(email)
        }

        if(age) {
            this.ageInput.type(age)
        }

        if(salary) {
            this.salaryInput.type(salary)
        }

        if(department) {
            this.departmentInput.type(department)
        }

        this.submitButton.click()
    },

    validateAllEnteredFieldAreVisibleInColumns(tableColumns, { firstName, lastName, email, age, salary, department }) {
        tableColumns.as('tableColumns')

        cy.get('@tableColumns').eq(1).should('have.text', firstName)
        cy.get('@tableColumns').eq(2).should('have.text', lastName)
        cy.get('@tableColumns').eq(3).should('have.text', age)
        cy.get('@tableColumns').eq(4).should('have.text', email)
        cy.get('@tableColumns').eq(5).should('have.text', salary)
        cy.get('@tableColumns').eq(6).should('have.text', department)
    },

    validateAllFieldsMustBeEntered() {
        this.firstNameInput.should('match', ':invalid')
        this.lastNameInput.should('match', ':invalid')
        this.emailInput.should('match', ':invalid')
        this.ageInput.should('match', ':invalid')
        this.salaryInput.should('match', ':invalid')
        this.departmentInput.should('match', ':invalid')
    },

    editTable({ firstName, lastName, email, age, salary, department }) {
        this.editTableButton.click()

        if (firstName) {
            this.firstNameInput.clear()
            this.firstNameInput.type(firstName)
        }

        if (lastName) {
            this.lastNameInput.clear()
            this.lastNameInput.type(lastName)
        }

        if (email) {
            this.emailInput.clear()
            this.emailInput.type(email)
        }

        if (age) {
            this.ageInput.clear()
            this.ageInput.type(age)
        }

        if (salary) {
            this.salaryInput.clear()
            this.salaryInput.type(salary)
        }

        if (department) {
            this.departmentInput.clear()
            this.departmentInput.type(department)
        }

        this.submitButton.click()
    }
}
