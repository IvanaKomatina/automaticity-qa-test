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

    get tableColumns() {
        return cy.get('div[class="rt-tbody"] div[class="rt-tr-group"]:nth-child(4) div')
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

    validateAllEnteredFieldAreVisibleInColumns({ firstName, lastName, email, age, salary, department }) {
        this.tableColumns.eq(1).should('have.text', firstName)
        this.tableColumns.eq(2).should('have.text', lastName)
        this.tableColumns.eq(3).should('have.text', age)
        this.tableColumns.eq(4).should('have.text', email)
        this.tableColumns.eq(5).should('have.text', salary)
        this.tableColumns.eq(6).should('have.text', department)
    },

    validateAllFieldsMustBeEntered() {
        this.firstNameInput.should('match', ':invalid')
        this.lastNameInput.should('match', ':invalid')
        this.emailInput.should('match', ':invalid')
        this.ageInput.should('match', ':invalid')
        this.salaryInput.should('match', ':invalid')
        this.departmentInput.should('match', ':invalid')
    }
}
