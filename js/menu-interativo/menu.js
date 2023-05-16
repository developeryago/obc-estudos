while (true){
    let option = prompt("----Menu de Opções----\n1) Olá\n2) Oi\n3) koé\n4) Bye\n5) Encerrar programa")
    let optionN = parseFloat(option)
    if (optionN == 1){
        alert("olá")
    } else if (optionN == 2){
        alert("Oi")
    } else if (optionN == 3){
        alert("Koé")
    } else if (optionN == 4){
        alert("Bye")
    } else if (optionN == 5){
        break
    } else{
        alert("Opção inválida!")
    }
}