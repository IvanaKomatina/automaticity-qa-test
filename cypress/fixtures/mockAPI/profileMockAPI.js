module.exports = {

    get({
        statusCode = 200,
        statusText = "OK",
        token = window.localStorage.getItem('token'),
        userId = window.localStorage.getItem('userId'),
        assert = true
    }) {
        return cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: `${Cypress.env('baseAPI')}Account/v1/User/${userId}`,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json'
            }
        }).then(response => {
            if(assert){
                expect(response.status).eql(statusCode)
                expect(response.statusText).eql(statusText)
            }
        })
    }
}
