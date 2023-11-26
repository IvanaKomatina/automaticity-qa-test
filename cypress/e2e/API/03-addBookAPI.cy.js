const addBook = require("../../fixtures/mockAPI/addBookMockAPI")
const login = require("../../fixtures/mockAPI/loginMockAPI")
const deleteAllBooks = require("../../fixtures/mockAPI/deleteAllBooksMockAPI")

describe("Add Book API tests", () => {

    beforeEach(() => {
        login.post({ assert: false })
        addBook.get({}).as('booksResponse')
    })

    it("Validate User is able to add book in his collection - API", () => {
        deleteAllBooks.delete({ assert: false })
        cy.wrap({}).then(function() {
            const isbn = this.booksResponse.body.books[0].isbn

            addBook.post({ collectionOfIsbns: [{ isbn: isbn }] }).then(addBookResponse => {
                expect(addBookResponse.body.books).to.be.a('array')
                expect(addBookResponse.body.books).to.have.lengthOf(1)
                expect(addBookResponse.body.books[0].isbn).to.eq(isbn)
            })
        })
    })

    it("Validate User is not able to add existing book in his collection - API", () => {
        deleteAllBooks.delete({ assert: false })
        cy.wrap({}).then(function() {
            const isbn = this.booksResponse.body.books[0].isbn

            addBook.post({ collectionOfIsbns: [{ isbn: isbn } ] })
            addBook.post({ collectionOfIsbns: [{ isbn: isbn } ], statusCode: 400, statusText: 'Bad Request'}).then(addBookResponse => {
                expect(addBookResponse.body.message).eq("ISBN already present in the User's Collection!")
            })
        })
    })

    it("Validate User is not able to add not available book in his collection - API", () => {
        addBook.post({ collectionOfIsbns: [{ isbn: "1234" }], statusCode: 400, statusText: 'Bad Request'}).then(addBookResponse => {
            expect(addBookResponse.body.message).eq("ISBN supplied is not available in Books Collection!")
        })
    })
})
