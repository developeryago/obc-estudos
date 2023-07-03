const med = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length

console.log(med(4, 4, 10))