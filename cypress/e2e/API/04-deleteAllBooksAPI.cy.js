const addBook = require("../../fixtures/mockAPI/addBookMockAPI")
const login = require("../../fixtures/mockAPI/loginMockAPI")
const deleteAllBooks = require("../../fixtures/mockAPI/deleteAllBooksMockAPI")
const profile = require("../../fixtures/mockAPI/profileMockAPI")


describe("Add Book API tests", () => {

    it("Validate User is able to delete all books from his collection - API", () => {
        login.post({ assert: false })
        addBook.get({}).as('booksResponse')

        cy.wrap({}).then(function() {
            const isbn = this.booksResponse.body.books[0].isbn

            addBook.post({ collectionOfIsbns: [{ isbn: isbn } ] })

            deleteAllBooks.delete({})

            profile.get({}).then(response => {
                expect(response.body.books).to.be.empty
            })
        })
    })
})
