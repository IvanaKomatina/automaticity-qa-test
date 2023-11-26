const generateToken = require("../../fixtures/mockAPI/generateTokenMockAPI")

describe("Login API tests", () => {

    it("Validate User is able to login with Valid credentials - API", () => {
        generateToken.post({})
    })

    it("Validate User is not able to login without userName - API", () => {
        generateToken.post({userName: '', statusCode: 400, statusText: 'Bad Request'}).then(response => {
            expect(response.body.message).eql('UserName and Password required.')
        })
    })

    it("Validate User is not able to login without password - API", () => {
        generateToken.post({password: '', statusCode: 400, statusText: 'Bad Request'}).then(response => {
            expect(response.body.message).eql('UserName and Password required.')
        })
    })

    it("Validate User is not able to login with incorrect username - API", () => {
        generateToken.post({userName: 'test'}).then(response => {
            expect(response.body.result).eql('User authorization failed.')
        })
    })

    it("Validate User is not able to login with incorrect password - API", () => {
        generateToken.post({password: 'test2!'}).then(response => {
            expect(response.body.result).eql('User authorization failed.')
        })
    })

    it("Validate User is not able to login without any parameters - API", () => {
        generateToken.post({userName: "", password: "", statusCode: 400, statusText: "Bad Request"}).then(response => {
            expect(response.body.message).eql('UserName and Password required.')
        })
    })
})
