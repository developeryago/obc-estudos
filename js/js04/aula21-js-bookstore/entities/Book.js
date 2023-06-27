const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(title, synopsis, genre, pags, author, descripton, price, inStock){
        super(`Livro: ${title}`, descripton, price, inStock)
        this.synopsis = synopsis
        this.genre = genre
        this.pags = pags
        this.author = author
    }
}