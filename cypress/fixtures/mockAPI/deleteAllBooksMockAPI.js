module.exports = {

    delete({
        userId = window.localStorage.getItem('userId'),
        statusCode = 204,
        statusText = "No Content",
        token = window.localStorage.getItem('token'),
        assert = true
    }){
        return cy.request({
            failOnStatusCode : false,
            method : 'DELETE',
            url : `${Cypress.env('baseAPI')}BookStore/v1/Books`,
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },

            qs: {
                'UserId': userId
             }
        }).then(response => {
            if(assert){
                expect(response.status).eql(statusCode)
                expect(response.statusText).eql(statusText)
            }
        })
    }
}
