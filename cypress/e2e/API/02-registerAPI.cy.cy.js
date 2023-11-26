const register = require("../../fixtures/mockAPI/registerMockAPI")

describe("Register API tests", () => {

    beforeEach(() => {
        cy.generateFixtureAPI()
    })

    it("Validate User is able to register with Valid credentials - API", () => {
        cy.fixture('usersAPI').then(registerData => {
            register.post(registerData).then(response => {
                expect(response.body.username).eql(registerData.username)
            })
        })
    })

    it("Validate User is not able to register without username - API", () => {
        cy.fixture('usersAPI').then(registerData => {
            register.post({password: registerData.password, statusCode: 400, statusText: 'Bad Request'}).then(response => {
                expect(response.body.message).eql('UserName and Password required.')
            })
        })
    })

    it("Validate User is not able to register without password - API", () => {
        cy.fixture('usersAPI').then(registerData => {
            register.post({username: registerData.username, statusCode: 400, statusText: 'Bad Request'}).then(response => {
                expect(response.body.message).eql('UserName and Password required.')
            })
        })
    })

    it("Validate User is not able to register without special character password - API", () => {
        cy.fixture('usersAPI').then(registerData => {
            register.post({username: registerData.username, password: registerData.invalidPassword, statusCode: 400, statusText: 'Bad Request'}).then(response => {
                expect(response.body.message).eql("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
            })
        })
    })

    it("Validate User is not able to register with numeric password - API", () => {
        cy.fixture('usersAPI').then(registerData => {
            register.post({username: registerData.username, password: registerData.invalidPasswordNumeric, statusCode: 400, statusText: 'Bad Request'}).then(response => {
                expect(response.body.message).eql("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
            })
        })
    })

    it("Validate User is not able to register with password less then 8 characters - API", () => {
        cy.fixture('usersAPI').then(registerData => {
            register.post({username: registerData.username, password: registerData.invalidPasswordLessThan8Characters, statusCode: 400, statusText: 'Bad Request'}).then(response => {
                expect(response.body.message).eql("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
            })
        })
    })

    it("Validate User is not able to register without username and password - API", () => {
            register.post({statusCode: 400, statusText: 'Bad Request'}).then(response => {
                expect(response.body.message).eql('UserName and Password required.')
            })
        })
})
