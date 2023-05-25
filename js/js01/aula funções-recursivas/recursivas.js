function dividir(num){
    console.log(num)
    if (num % 2 === 0){
        dividir(num / 2)
    } else{
        return num
    }
}
//dividir(256)

function fatorial(num){
    parseFloat(num)
    console.log("Número: " + num)
    if (num === 1){
        return 1
    } else{
          console.log( num + " * !" + (num - 1))
          return num * fatorial(num - 1)  
    }
}
fatorial(5)