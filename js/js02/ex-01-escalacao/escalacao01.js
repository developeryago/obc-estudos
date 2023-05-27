function addPlayer(){
    const name = document.getElementById("name").value
    const position = document.getElementById("position").value
    const number = document.getElementById("number").value

    const confirmation = confirm("Escalar " + name + " na posoção " + position + " com número " + number + "?")

    if (confirmation){
        const escalção = document.getElementById("escalacao")
        const playerItem = document.createElement("li")
        playerItem.id = "player-" + number
        playerItem.innerText = position + ": " + name + " (" + number + ")"
        escalção.appendChild(playerItem)

        document.getElementById("name").value = ""
        document.getElementById("position").value = ""
        document.getElementById("number").value = ""
    } else{
        document.getElementById("name").value = ""
        document.getElementById("position").value = ""
        document.getElementById("number").value = ""
    }
}

function removePlayer(){
    const number = document.getElementById("delete").value
    const playerToRemove = document.getElementById("player-" + number)
    const confirmation = confirm("Deseja remover o jogador " + playerToRemove.innerText + "?")

    if (confirmation){
        //const escalção = document.getElementById("escalacao")
        //escalção.removeChild(playerToRemove)
        playerToRemove.remove()
        document.getElementById("delete") = ""
    }
}