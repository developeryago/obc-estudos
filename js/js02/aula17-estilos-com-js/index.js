function toLight(){
    document.body.style.color = "#212529"
    document.body.style.backgroundColor = "#f1f5f9"
}

function toDark(){
    document.body.style.color = "#f1f5f9"
    document.body.style.backgroundColor = "#212529"
}

function switchTheme(){
    document.body.classList.toggle("is-dark")
    document.body.classList.toggle("is-light")
}

document.getElementById('lightBtn').addEventListener("click", toLight)
document.getElementById("darkBtn").addEventListener("click", toDark)
document.getElementById("switchBtn").addEventListener("click", switchTheme)