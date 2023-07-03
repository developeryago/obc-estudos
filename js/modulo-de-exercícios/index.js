const med = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length



console.log(med(2, 5, 7, 1, -2))
console.log(med(10, 10, 10, 10, 9))
console.log(med(25, 75))
