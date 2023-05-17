const word = prompt("Digite uma palavra para descobrir se ela é um palímdromo: ")
let palimdromo = ""

for (let i = word.length - 1; i >=0; i -=1){
   palimdromo += word[i] 
}

if (word == palimdromo){
    alert(`A palavra ${word.toUpperCase()} de traz pra frente fica ${palimdromo.toUpperCase()}, com isso ela é um palímdromo`)
} else{
    alert(`A palavra ${word.toUpperCase()} de traz pra frente fica ${palimdromo.toUpperCase()}, com isso ela NÃO é um palímdromo`)
}