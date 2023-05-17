let fila = ["Miguel", "Mikael", "Sabrina", "Millena", "Luciana"]

while(true){
    let escolha = prompt("--Lista de Espera do Consultório Médico--\n\n" + fila  + "\nEscolha uma das opções:\n" + "1) Novo paciente\n" + "2) Cosultar paciente\n" + "3) Sair")
    if (escolha == 1){
        let novo = prompt("Digite o nome do novo paciente:")
        fila.push(novo)
    } else if (escolha == 2){
        alert(`O paciente ${fila[0]} foi consultado`)
        fila.shift()
    } else if (escolha == 3){
        alert("Encerrando...")
        break
    } else{
        alert("Escolha inválida, tente novamente!")
    }
}