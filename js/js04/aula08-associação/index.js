const Address = require("./Address")
const Person = require("./Person")


const addr = new Address("Rua das Camélias", "Lt10 Qd24", "Itaipuaçu", "Maricá", "RJ")
const yago = new Person("Yago", addr)

console.log(`${yago.name} mora em: 
${yago.address.fullAddress()}`)

