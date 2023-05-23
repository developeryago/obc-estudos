const input1 = prompt("Qual é o número que deseja calcular? ")
const input2 = prompt("Qual o segundo valor? ")


const valor = parseFloat(input1)
const valor2 = parseFloat(input2)
const soma = valor + valor2
const sub = valor - valor2
const mult = valor * valor2
const div = valor / valor2

alert(`Fizemos as contas e:\n
${valor} + ${valor2} = ${soma}\n
${valor} - ${valor2} = ${sub}\n
${valor} * ${valor2} = ${mult}\n
${valor} / ${valor2} = ${div}`)