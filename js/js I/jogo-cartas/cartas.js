let cards = []
let baralho = []

while (true){
    let escolha = prompt("---Jogo de cartas---\n\n" + "Na sua mão à:\n " + cards + "\nO que deseja fazer?" + "\n1)Adicionar uma carta" + "\n2)Puxar uma carta" + "\n3) Sair")
    if (escolha == 1){
        let newCard = prompt("Qual o nome da nova carta a ser adicionada ao baralho?")
        baralho.push(newCard)
    } else if (escolha == 2){
        if (baralho.length == 0){
            alert("Não há cartas no baralho")
        } else{    
            alert("Você puxou o(a):" + baralho[baralho.length - 1])
            cards.push(baralho[baralho.length - 1])
            baralho.pop()
        }
    } else if (escolha == 3){
        alert("Encerrando...")
        break
    } else{
        alert("Opção Inválida!")
    }
}