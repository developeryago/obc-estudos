function execute() {
    // faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log("A Promise está sendo executada.")
        setTimeout(() => {
            console.log("resolvendo a Promise...")
            resolve("Resultado!")
        }, 1000 * 2)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000 * 2)