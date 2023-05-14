const nome = prompt("Digite seu nome completo: ")
const campo = prompt("Digite seu campo de estudo: ")
const ano = prompt("Digite seu ano de nascimento: ")
const date = new Date()
const dataAtual = date.getFullYear()

console.log(`Olá ${nome}, vc estuda no campo ${campo} e tem ${dataAtual - ano} anos`)