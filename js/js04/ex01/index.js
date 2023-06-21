const User = require("./user")
const Product = require("./product")

const Yago = new User("Yago Machado", "contato.yagomachado@outlook.com", 12345678)
console.log(Yago)
Yago.login("contato.yagomachado@outlook.com", 12345678)

const ps5 = new Product("Playstation 5", "Console de video-game", 4000)
console.log(ps5)
console.log(ps5.addToStock(10))
console.log(ps5.calculateDiscont(10))