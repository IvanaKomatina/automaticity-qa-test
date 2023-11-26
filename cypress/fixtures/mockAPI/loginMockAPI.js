module.exports = {

    post({
        userName = "IvanaTest",
        password = "TestIvana1!",
        statusCode = 200,
        statusText = "OK",
        assert = true
    })  {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('baseAPI')}Account/v1/Login`,
            body: {
                userName: userName,
                password: password
            }
        }).then(response => {
            if(response.body?.token) {
                window.localStorage.setItem('token', response.body.token)
                window.localStorage.setItem('userId', response.body.userId)
            }

            if(assert){
                expect(response.status).eql(statusCode)
                expect(response.statusText).eql(statusText)
            }
        })
    }
}
