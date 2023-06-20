 class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity){
         return `inStock updated: ${this.inStock += quantity}`
    }
    calculateDiscont(percentage){
        const discount = this.price * (percentage / 100)
        return `Com ${percentage}% de desconto o ${this.name} agora vale ${this.price - discount}`
    }
}

const ps5 = new Product("Playstation 5", "Console de video-game", 4000)
console.log(ps5)
console.log(ps5.addToStock(10))
console.log(ps5.calculateDiscont(10))