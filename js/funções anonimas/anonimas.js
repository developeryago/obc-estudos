function somar(a, b){
    return a + b
}

let operação = somar

console.log(operação(4, 5))

operação = function (a, b){
    return a - b
}

console.log(operação(4, 5))