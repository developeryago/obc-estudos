let devs = []
const newTec = document.getElementById("newTec")

newTec.addEventListener("click", createForm)

function createForm(){
    const pList = document.getElementById("form")
    
    const tecLI = document.createElement("label")
    tecLI.innerText = "Tecnologia que trabalha: "
    const tecInput = document.createElement("input")
    tecInput.name = "tecInput"
    tecInput.type = "text"
    tecInput.id = "tecInput"
    tecLI.appendChild(tecInput)
    pList.appendChild(tecLI)

    pList.appendChild(document.createElement("br"))
    pList.appendChild(document.createElement("br"))
    
    const timeSpan = document.createElement("span")
    timeSpan.innerHTML = "<label for='time'>Tempo de experiência: </label>"

    const timesmall = document.createElement("span")
    timesmall.innerHTML = "<label for='0-2'> 0-2 anos</label>"
    const timeSmallInput = document.createElement("input")
    timeSmallInput.type = "radio"
    timeSmallInput.name = "radio"
    timeSmallInput.id = "0-2"
    timeSmallInput.value = "0-2"
    timesmall.appendChild(timeSmallInput)

    const timeMedium = document.createElement("span")
    timeMedium.innerHTML = "<label for='3-4'> 3-4 anos</label>"
    const timeMediumInput = document.createElement("input")
    timeMediumInput.type = "radio"
    timeMediumInput.name = "radio"
    timeMediumInput.id = "3-4"
    timeMediumInput.value = "3-4"
    timeMedium.appendChild(timeMediumInput)

    const timeLarge = document.createElement("span")
    timeLarge.innerHTML = "<label for='5+'> 5+ anos</label>"
    const timeLargeInput = document.createElement("input")
    timeLargeInput.type = "radio"
    timeLargeInput.name = "radio"
    timeLargeInput.id = "5+"
    timeLargeInput.value = "5+"
    timeLarge.appendChild(timeLargeInput)

    pList.append(timeSpan, timesmall, timeMedium, timeLarge)

    const submite = document.createElement("input")
    submite.type = "button"
    submite.value = "Enviar"
    pList.appendChild(document.createElement("br"))
    pList.appendChild(document.createElement("br"))
    pList.appendChild(submite)
   
    const del = document.createElement("input")
    del.type = "button"
    del.value = "Cancelar"
    pList.appendChild(del)
    submite.addEventListener("click", insert)
    del.addEventListener("click", remove)
}


function insert(){
    const name = document.getElementById("name-input").value
    const tec = document.getElementById("tecInput").value
    let time = ''
    document.querySelectorAll("input[name='radio']:checked").forEach(function(item){
        time = item.value
    })

    devs.push({
        name,
        tec,
        time
    })
    console.log(devs)
    document.getElementById("name-input").value = ""
    document.getElementById("tecInput").value = ""
}

function remove(){
    const pList = document.getElementById("form")
    pList.remove()
}