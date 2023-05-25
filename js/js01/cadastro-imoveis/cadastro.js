 let properties = []

 while (true){
    let choice = prompt("---Cadastro de Imóveis---" +
    "\n\nTotal de imóveis já cadastrados " + properties.length + "\nEscolha uma das opções abaixo para continuar:" + "\n1)Salvar um imóvel" + "\n2)Exibir Imóveis salvos" + "\n3)Sair")
    if (choice == 1){
        const type = {}
        type.owner = prompt("Qual o nome do proprietário? ")
        type.room = prompt("Quantidade de quartos?")
        type.restroom = prompt("Quantidade de banheiros?")
        type.garege = prompt("Possui garagem? ")
        let option = confirm("Salvar este imóvel?\n" +
        "\nProprietário: " + type.owner + 
        "\nQuartos: " + type.room +
        "\nBanheiros: " + type.restroom + 
        "\nGaragem: " + type.garege)
        if (option == true){
            properties.push(type)
        } else{
            alert("Voltando ao menu...")
        }
    } else if (choice == 2){
        if (properties.length == 0){
            alert("Ainda não há nenhum imóvel cadastrado")
        } else{
            for (let i = 0; i < properties.length; i += 1){
                alert((i + 1 + "º") + " Imóvel" +
                "\nProprietário: " + properties[i].owner +
                "\nQuartos: " + properties[i].room +
                "\nBanheiros: " + properties[i].restroom +
                "\nGaragem: " + properties[i].garege)
            }
        }
    } else if (choice == 3){
        alert("Saindo...")
        break
    } else{
        alert("Opção inválida")
    }
 }