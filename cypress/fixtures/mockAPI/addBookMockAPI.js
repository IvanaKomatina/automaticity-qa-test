module.exports = {

    get({
        statusCode = 200,
        statusText = "OK",
        token = window.localStorage.getItem('token')
    }) {
        return cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: `${Cypress.env('baseAPI')}BookStore/v1/Books`,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json'
            }
        }).then(response => {
            expect(response.status).eql(statusCode)
            expect(response.statusText).eql(statusText)
        })
    },

    post({
        userId = window.localStorage.getItem('userId'),
        collectionOfIsbns = [],
        statusCode = 201,
        statusText = "Created",
        assert = true
    }) {
        return cy.request({
            failOnStatusCode: false,
            method: 'POST',
            url: `${Cypress.env('baseAPI')}BookStore/v1/Books`,
            headers: {
                'Authorization': 'Bearer ' +  window.localStorage.getItem('token'),
                'Accept': 'application/json'
            },
            body: {
                userId: userId,
                collectionOfIsbns: collectionOfIsbns
            }
        }).then(response => {
            if(assert){
                expect(response.status).eql(statusCode)
                expect(response.statusText).eql(statusText)
            }
        })
    }
}
