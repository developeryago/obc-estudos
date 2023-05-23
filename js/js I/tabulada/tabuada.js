const value = prompt("Digite um valor para descobrir a sua tabuada: ")
let resp = ""
for (let i = 1; i <=20; i +=1){
    resp += (`${value} X ${i} = ${value * i}\n`)
}
alert(`O resultado da tabuada de ${value} é:\n${resp}`)