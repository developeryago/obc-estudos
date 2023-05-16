const valorSTR = prompt("Qual é a quantidade inicial de dinheiro?")
let valor = parseFloat(valorSTR)

while (true){
    const option = prompt("---Menu de Opções Financeiras---\n1) Adicionar dinheiro\n2) Remover dinheiro\n3) Sair")
    const optionN = parseFloat(option)
    if (optionN == 1){
        let add = prompt("Quanto deseja adicionar?")
        let soma = valor + parseFloat(add)
        alert(`Com isso adiconamos ${add} ao valor de ${valor}, totalizando ${soma}`)
        valor = Number(soma)
    } else if ( optionN ==2){
        let add = prompt("Quanto deseja subtrair?")
        let Subtrair = valor - parseFloat(add)
        alert(`Com isso adiconamos ${add} ao valor de ${valor}, totalizando ${Subtrair}`)
        valor = Number(Subtrair)
    } else if (optionN == 3){
        alert("Fim do programa!")
        break
    }
}