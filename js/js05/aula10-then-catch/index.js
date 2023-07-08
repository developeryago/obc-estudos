function execute() {
    // faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log("A Promise está sendo executada.")
        setTimeout(() => {
            console.log("resolvendo a Promise...")
            if (true){ 
                resolve("Liverpool 6 Champions")  
            } else{
                reject("City minúsculo")
            }
        }, 1000 * 2)
    })
}

execute().then((result) => {
    console.log(`A Promise foi resolvida, o resultado é: ${result}`)
}).catch((err) => {
    console.log(`A Promise foi rejeitada. Motivo: ${err}`)
})