const value = document.getElementById('value').value
const deposit = document.getElementById("deposit")
const transfer = document.getElementById("transfer")
const withdraw = document.getElementById("withdraw")
let balance = 0


function renderAction (actionData) {
    const action = document.createElement("h3")
    action.id = `action-${actionData.id}`
    action.type = actionData.type
    action.value = actionData.balance
    action.textContent = `${actionData.type} - ${actionData.balance}`
    const bntDelete = document.createElement("button")
    bntDelete.textContent = "Delete"
    bntDelete.id = actionData.id
    if (actionData.type === "deposit") {
        balance += Number(actionData.balance)
        console.log(balance)
    } else if (actionData.type === "transfer") {
        balance -= Number(actionData.balance)
    } else {
        balance -= Number(actionData.balance)
    }
    document.querySelector("#balance").textContent = balance
    document.querySelector("#extrato").append(action, bntDelete)
    bntDelete.addEventListener("click", async () => {
        const deleteActions = await fetch(`http://localhost:3000/action/${bntDelete.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then( resp => resp.json())
        balance -= actionData.balance
        document.querySelector("#balance").textContent =balance 
        document.querySelector("#extrato").remove(action,bntDelete)
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

    const actionData = {
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