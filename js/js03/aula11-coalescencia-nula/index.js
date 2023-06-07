/*const a = 0 //false
const b = null //false
const c = "test" //true

console.log(a || b || c)
console.log(a ?? b ?? c)*/

const a = 0
let b = a || 42
console.log({a, b})

b = a ?? 42
console.log({a, b})
