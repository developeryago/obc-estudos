function Book(name, pags, tags, author){
    this.name = name
    this.pags = pags
    this.tags = tags
    this.author = author
    this.inStock = 0
    this.addOnStock = (quantity) => this.inStock += quantity
    
    this.save = function(){

    }
}

const tags = ["romance", "erotic", "fantasy"]
const author = "E. L. James"

const fiftyShades = new Book("Fifty Shades of Gray", 514, tags,author)
const fiftyShadesDarker = new Book("Fifty Shades Darker", 554, tags,author)

console.log(fiftyShades, fiftyShadesDarker)