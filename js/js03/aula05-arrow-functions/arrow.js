function normalSum(a, b){
    return a + b
}
console.log(`A soma normal é: ${normalSum(5,7)}`)

const anonymousSum = function(a, b){
    return a + b
}
console.log(`A soma anônima é: ${anonymousSum(5,7)}`)

const arrowSum = (a, b) => {
    return a + b
}
console.log(`A soma arrow function é: ${arrowSum(5,7)}`)

const arrowSubtract = (a, b) => a - b
console.log(`A subtração arrow function é: ${arrowSubtract(19,7)}`)

const duble = n => `O dobro de ${n} é ${n * 2}`
console.log(duble(19))

const clubs = ["Liverpool", "Real Madrid" , "Milan", "Bayer de Munique", "Celtic", "Santos", "Boca Juniors", "Tigres", "Al Hali", "Lazio", "Livorno"]

const clubWithL = clubs.filter(club => club[0] === "L")
console.log(clubWithL)