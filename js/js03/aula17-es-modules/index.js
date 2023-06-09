import {label, input, br} from "./functions.js"

console.log(label({for: "fullname", textContent: "Nome Completo"}))
console.log(input({type: "text", name: "fullname", id: "fullname"}))
console.log(br())