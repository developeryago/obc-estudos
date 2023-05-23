const candidatos = [
    {nome}
]
let vaga = []

function listVagas(){
    alert("Vagas disponíveis: " + vaga +
    "\nQuantidade de candidatos: " + candidatos.length)
}

function novaVaga(){
    const nVaga = {}
    nVaga.nome = (prompt("Qual o nome da vaga? "))
    nVaga.vaga = prompt("Qual a descrição da vaga? ")
    nVaga.dataLimite = prompt("Qual a data limite?")
    nVaga.indice = prompt("Qual o índice da vaga? ")
    let confirmacao = confirm("Você confirma as informações?" + 
    "\nNome da vaga: " + nVaga.nome + 
    "\nDescrição da vaga: " + nVaga.vaga + 
    "\nData Limite: " + nVaga.dataLimite) +
    "\nÍndice: " +nVaga.indice
    if (confirmacao === true){
        vaga.push(nVaga)
        return nVaga.sort(function(a, b){
            return a.indice - b.indice
        })
    } else{
        alert("voltando ao menu...")
    }
}

function visualizarVaga(){

}