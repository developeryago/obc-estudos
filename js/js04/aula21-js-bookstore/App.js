const Database = require("./Database");
const Author = require("./entities/Author");
const Book = require("./entities/Book");
const Order = require("./entities/Order");
const Poster = require("./entities/Poster");
const Product = require("./entities/Product");
const User = require("./entities/User");

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find("users")
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
         return App.#database.find("authors")
    }

    createBook(title, synopsis, genre, pags, author, descripton, price, inStock) {
        const book = new Book(title, synopsis,genre, pags, author, descripton, price, inStock)
        App.#database.saveBook(book)
    }

    getBooks() {
         return App.#database.find("books")
    }
    
    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    getPoster(){
       return  App.#database.find("posters")
    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    createOrder(itens, user){
        const order  = new Order(itens, user)
        App.#database.saveOrder(order)
        order.data.itens.forEach(({product, quantity}) => {
            if (product instanceof Book){
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster){
                App.#database.removePostersFromStock(product.name, quantity)
            }
        })
    }

    getOrders(){
        return App.#database.find("orders")
    }

    showDatabase() {
        App.#database.showStorage()
    }
}