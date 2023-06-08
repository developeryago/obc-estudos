const mediaSimples = (...numbers) => {
    soma = numbers.reduce((accum, num) => (accum + num), 0)
    return soma / numbers.length
}
/*function mediaPonderada (peso, ...numbers){
    multi = 0
    for (i = 0; i < numbers.length; i++){
       multi += numbers[i] * peso
    }
    return multi / peso
}*/

const mediaPonderada = (...numbers) => {
    const soma = numbers.reduce((accum, {number, peso}) => accum + (number * (peso ?? 1)), 0)
    const somaPesos = numbers.reduce((accum, entrada) => accum + (entrada.peso ?? 1), 0)
    return soma / somaPesos
}

/*function mediana(...numbers){
    position = 0
    if (numbers.length === 1){
        position = numbers[0]
        return position
    }
    if (numbers.length % 2 === 0){
        numbers[numbers.length / 2]
    }
}*/

const mediana = (...numbers) => {
    const numerosOrdenados = [...numbers].sort((a, b) => a - b)
    const meio = Math.floor(numerosOrdenados.length / 2)
    if (numerosOrdenados.lenght % 2 !== 0){
        return numerosOrdenados[meio]
    }
    const primeiroDoMeio = numerosOrdenados[meio - 1]
    const segundoDoMeio = numerosOrdenados[meio]
    return mediaSimples(primeiroDoMeio, segundoDoMeio)
}


const moda = (...numbers) => {
    const quantidade = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantidade.sort((a, b) => b[1] - a[1])
    return quantidade[0][0]
}

console.log(`Média Aritmética Simples: ${mediaSimples(2, 6, 3, 7, 4)}`)
console.log(`Média Ponderada: ${mediaPonderada({number: 9, peso: 3},
{number: 7},
{number: 10},
)}`)
console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`)
console.log(`Moda: ${moda(1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 4)}`)