const value = document.getElementById('value').value
const deposit = document.getElementById("deposit")
const transfer = document.getElementById("transfer")
const withdraw = document.getElementById("withdraw")
let balance = 0
let countId = 0 


function renderAction (actionData) {
    const action = document.createElement("h3")
    action.id = `action-${actionData.id}`
    action.type = actionData.type
    action.value = actionData.balance
    action.textContent = `${actionData.name} - ${actionData.type} (R$${actionData.balance})`

    const div = document.createElement("div")
    div.id = countId

    const editBtn = editAction(actionData)
    const bntDelete = document.createElement("button") 
    bntDelete.textContent = "Delete from history"
    bntDelete.id = actionData.id
    if (actionData.type === "deposit") {
        balance += Number(actionData.balance)
        // action.value.classList
        console.log(balance)
    } else if (actionData.type === "transfer") {
        balance -= Number(actionData.balance)
    } else {
        balance -= Number(actionData.balance)
    }
    document.querySelector("#balance").textContent = balance
    const br = document.createElement("br")
    
    div.append(action, bntDelete, editBtn, br)
    document.querySelector("#extrato").append(div)
    bntDelete.addEventListener("click", async (ev) => {
        const deleteActions = await fetch(`http://localhost:3000/action/${bntDelete.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then( resp => resp.json())
        balance -= actionData.balance
        document.querySelector("#balance").textContent = balance 
        
        document.querySelector("#extrato").removeChild(div)
    })
}

async function fetchAction() {
    const actions = await fetch("http://localhost:3000/action").then( resp => resp.json())
    actions.forEach(renderAction)
}

document.addEventListener("DOMContentLoaded", fetchAction())

const form = document.querySelector("form")
form.addEventListener("submit", async (ev) =>{
    ev.preventDefault()
    countId ++
    const actionData = {
        name: document.querySelector("#name").value,
        balance: document.querySelector("#value").value,
        type: document.querySelector(`input[name=radio]:checked`).id
    }

    const response = await fetch(" http://localhost:3000/action", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(actionData),
    })
    const savedAction = await response.json()
    document.querySelector("form").reset()
    renderAction(savedAction)
})

function editAction (actionData) {
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn")
    editBtn.id = "edit"
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", () => {
        document.querySelector("#value").value = actionData.balance
        document.querySelector("#name").value = actionData.name
    })
    return editBtn
}