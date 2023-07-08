// pendente - pending
// resolvida - resolved
// rejeitada - rejected 
const p = new Promise((resolve, reject) =>{
    console.log("A Promise está sendo executada.")
    setTimeout(() =>{
        if (true) {
            reject(false)
        }
        console.log("resolvendo a Promise...")
        resolve(true)
    }, 1000 * 2)
})

console.log(p)

setTimeout(() =>{
    console.log(p)
}, 1000 * 3)