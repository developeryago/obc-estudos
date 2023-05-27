// Tentativa frustada de fazer o exercício

const squad = []

function escalar(){
    const escalação = document.getElementById("escalacao")
    let player = []
    const ul = document.createElement("ul")
    const inputSection = document.getElementById("input-section")

    const nameLi = document.createElement("li")
    nameLi.innerHTML = "<label for='name'>Nome: </label>"
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.name = "name"
    nameInput.id = "name"
    nameInput.innerText = "Nome: "
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement("br"))
    inputSection.appendChild(ul)

    const positionLi = document.createElement("li")
    positionLi.innerHTML = "<label for='position'>Posição: </label>"
    const positionInput = document.createElement("input")
    positionInput.name = "position"
    positionInput.type = "text"
    positionInput.id = "position"
    positionLi.appendChild(positionInput)
    ul.appendChild(positionLi)
    ul.appendChild(document.createElement("br"))

    const numberLi = document.createElement("li")
    numberLi.innerHTML = "<label for='number'>Número: </label>"
    const numberInput = document.createElement("input")
    numberInput.type = "number"
    numberInput.name = "number"
    numberInput.id = "number"
    numberLi.appendChild(numberInput)
    ul.appendChild(numberLi)
    ul.appendChild(document.createElement("br"))

    const criate = document.createElement("input")
    criate.type = "button"
    criate.name = "criate"
    criate.value = "Adicionar"
    criate.addEventListener("click", confirmEscalação(), true)
    ul.appendChild(criate)

    player.name = document.getElementById("name").value
    player.position = document.getElementById("position").value
    player.number = document.getElementById("name").value
    const question = document.getElementById("question")
    question.innerText = "Deseja confirma a escalação de " + player.name + " na posição " + player.position + " e número " + player.number + "?"
}