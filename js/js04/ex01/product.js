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

module.exports = Product
