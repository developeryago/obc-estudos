const personagens = [
    {nome: "Cadu", animal: "pinguim", esporte: "surfe", nota: 27},
    {nome: "João", animal: "frango", esporte: "surfe", nota: 26},
    {nome: "Big Z", animal: "pinguim", esporte: "surfe", nota: 30}
]

// map
/*const nomes = []

for (let i = 0; i < personagens.length; i++){
    nomes.push(personagens[i].nome)
}*/
const nomes = personagens.map (function(personagem){
    return  personagem.nome
})
console.log(nomes)

// filter
//const pinguins = []

/*for (i = 0; i < personagens.length; i++){
    if (personagens[i].animal == "pinguim"){
        pinguins.push(personagens[i])
    }
//}*/

const pinguins = personagens.filter(function(personagem){
    return personagem.animal === "pinguim"
})
console.log(pinguins)

// reduce
const somaNotas = personagens.reduce(function(value, personagem){
    return value + personagem.nota
}, 0)

console.log(somaNotas)

// sort
const novoPersonagens = personagens.slice().sort(function(a, b){
    return a.nota - b.nota
})
console.log(personagens)
console.log(novoPersonagens)