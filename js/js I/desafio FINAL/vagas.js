let vaga = []

function listVagas(){
    if (vaga == ""){
        alert("Nenhuma vaga foi cadastrada até o momento!")
        return
    }
    const vagasEmTexto = vaga.reduce(function (textoFinal, vagas, indice){
        textoFinal += indice + ". "
        textoFinal += vagas.nome
        textoFinal += " (" + vagas.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}
function novaVaga(){
    const nVaga = {candidatos: []}
    nVaga.nome = (prompt("Qual o nome da vaga? "))
    nVaga.descricao = prompt("Qual a descrição da vaga? ")
    nVaga.dataLimite = prompt("Qual a data limite?")
    let confirmacao = confirm("Você confirma as informações?" + 
    "\nNome da vaga: " + nVaga.nome + 
    "\nDescrição da vaga: " + nVaga.descricao + 
    "\nData Limite: " + nVaga.dataLimite)
    if (confirmacao == true){
        vaga.push(nVaga)
    } else{
        alert("voltando ao menu...")
    }
}
function visuVaga(){
        const posição = prompt("Qual o índice da vaga que deseja vizualizar? ")
        if (posição >= vaga.length || posição < 0){
            alert("Opção inválida!" +
            "\nCertifíque-se de que há vagas cadastradas e que o índice desejado exista")
            return
        }
        const vagas = vaga[posição]
        const candidatosEmTexto = vagas.candidatos.reduce(function(textoFinal, candiato){
            return textoFinal + "\n - " + candiato
        }, "")
        alert("Vaga nº " + posição +
        "\nNome: " + vagas.nome +
        "\nDescrição: " + vagas.descricao +
        "\nData limite: " + vagas.dataLimite +
        "\nQuantidade de candidatos: " + vagas.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto)
}
function novoCandidato(){
    const nCandidato = prompt("Qual o nome do novo candidato? ")
    const indice = parseFloat(prompt("Qual o índice da vaga que deseja cadastrá-lo? "))
    if (indice >= vaga.length || indice < 0){
        alert("Opção inválida!" +
        "\nCertifíque-se de que há vagas cadastradas e que o índice desejado exista")
        return
    }
    const vagas = vaga[indice]
    let confirmacao = confirm("Você confirma o cadastro do candidato " + nCandidato + " na vaga\n" + indice + " ?\n" +
    "Nome: " + vagas.nome + "\nDescrição: " + vagas.descricao + "\nData Limite: " + vagas.dataLimite)
    if (confirmacao == true){
        vagas.candidatos.push(nCandidato)
        alert("Inscrição realizada!")
    } else{
        alert("voltando ao menu...")
    }
}
function excluirVaga(){
    const indiceEX = parseFloat(prompt("Qual o índice da vaga que deseja excluir? "))
    if (indiceEX >= vaga.length || indiceEX < 0){
        alert("Opção inválida!" +
        "\nCertifíque-se de que há vagas cadastradas e que o índice desejado exista")
        return
    }
    const vagas = vaga[indiceEX]
    let confirmacao = confirm("Você confirma a exclusão da vaga:\n" + indiceEX + "?\n" +
    "Nome: " + vagas.nome + "\nDescrição: " + vagas.descricao + "\nData Limite: " + vagas.dataLimite)
    if (confirmacao === true){
        vaga.splice(indiceEX, 1)
        alert("Vaga excluída!")
    } else{
        alert("Voltando ao menu...")
    }
}
function menu(){
    let opção = parseFloat(prompt("---Vagas de Emprego---" + "\n\n Selecione uma das opções abaixo:" 
    + "\n1) Listar vagas disponíveis" 
    + "\n2) Criar uma nova vaga" 
    + "\n3) Visualizar uma vaga"
    + "\n4) Inscrever um candidato em uma vaga"
    + "\n5) Excluir uma vaga"
    + "\n6) Sair"))
    return opção
}
function executar(){
    let opção = ""
    do{
        opção = menu()
        switch (opção){
            case 1:
                listVagas()
                break
            case 2:
                novaVaga()
                break
            case 3:
                visuVaga()
                break
            case 4:
                novoCandidato()
                break
            case 5:
                excluirVaga()
                break
            case 6:
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
        }

    } while(opção !== 6)
}
executar()