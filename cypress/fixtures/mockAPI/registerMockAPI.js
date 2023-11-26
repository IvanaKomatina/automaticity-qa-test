module.exports = {

    post({
        username = "",
        password = "",
        statusCode = 201,
        statusText = "Created",
        assert = true
    })  {
        return cy.request({
            failOnStatusCode: false,
            method: 'POST',
            url: `${Cypress.env('baseAPI')}Account/v1/User`,
            body: {
                userName: username,
                password: password
            }
        }).then(response => {
            if(assert){
                expect(response.status).eql(statusCode)
                expect(response.statusText).eql(statusText)
            }
        })
    }
}
