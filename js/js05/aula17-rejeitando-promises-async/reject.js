/*const numbers = [4, 9, 5, null, 13, 77]

async function asyncSquare(x) {
    if (typeof x !== "number"){
        return Promise.reject("Arguments must be of type number")
    }
    return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})*/

async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a - b
}
async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a - b
}

asyncSum(50, null).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

asyncSubtract(50, 33).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})
