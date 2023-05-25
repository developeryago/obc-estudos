const nome = prompt("Olá!\nQual é o seu nome?")
let city = []
let contCity = 0

while (true){
    let pergunta = confirm("Você já visitou aulguma cidade")
    if (pergunta === true){
         let pergunta2 = prompt("Qual o nome dela?")
        city += `| ${pergunta2}\n`
        contCity += 1
    } else{
        break
    }
}

alert(`${nome} já visitou ${contCity} cidades, sendo elas\n${city}`)