function calcMed(a, b){
    const med = (a + b) / 2
    return med
}

const result = calcMed(7, 2)
//console.log(result)

function calcArea(base, height){
    return base * height
}
function calcSquare(side){
    return calcArea(side, side)
}
console.log(calcSquare(9))