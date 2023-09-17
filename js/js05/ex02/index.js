async function imcCalculate(weight, height) {
    if (isNaN(weight) || isNaN(height)) {
         return Promise.reject("Os valores de peso e altura precisam ser numéricos!")
    }
    return  weight / (height * height)

    // return new Promise((resolve, reject) => {
    //     if (isNaN(weight) || isNaN(height)) {
    //         reject("Os valores de peso e altura precisam ser numéricos!")
    //     } else {
    //         resolve(weight / (height * height))
    //     }
    // })
}

 async function execute(weight, height) {
     
    //  .then((result) => {
    try{
        const result = await imcCalculate(weight, height)
        setTimeout(() => {
            if (result < 18.5) {
            console.log(`Seu IMC deu ${result}, com isso você está em estado de magreza`)
            } else if (result < 24.9) {
                console.log(`Seu IMC deu ${result}, com isso você está em estado normal`)
            } else if (result < 29.9) {
                console.log(`Seu IMC deu ${result}, com isso você está em estado de sobrepeso`)
            } else if (result < 39.9) {
                console.log(`Seu IMC deu ${result}, com isso você está em estado de obesidade`)
            } else {
                console.log(`Seu IMC deu ${result}, com isso você está em estado de obesidade grave`)
            }
        }, 1000 * 2)
    } catch(err) {
    console.log(err)
    }   
console.log("Evidenciando assincronismo.")
        
    // })
    
}

execute(68, 1.72)
execute("texto", 1.72)
execute(130, 1.72)
execute(51, 1.70)
execute(79, 1.75)