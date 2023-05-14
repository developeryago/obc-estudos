const input1 = prompt("Digite a velocidade do 1º veículo")
const input2 = prompt("Digite a velocidade do 2º veículo")
const x = parseFloat(input1)
const y = parseFloat(input2)

if (x == y){
    alert("A velocidade dos dois veículos é a mesma")
} else if (x > y){
    alert("A velociade do 1º veículo é maior")
} else{
    alert("A velociade do 2º veículo é maior")
}
