document.getElementById("sessionBtn").addEventListener("click", function(){
    const input = document.getElementById("session")
    sessionStorage.setItem("info", input.value)
    input.value = ""
})

document.getElementById("readSesssion").addEventListener("click", function(){
    const info = sessionStorage.getItem("info")
    alert("A informação salva é: " + info)
})

document.getElementById("localBtn").addEventListener("click", function(){
    const input = document.getElementById("local")
    localStorage.setItem("text", input.value)
    input.value = ""
})

document.getElementById("readLocal").addEventListener("click", function(){
    const text = localStorage.getItem("text")
    alert("O texto salvo no localStorage é: " + text)
})

document.getElementById("cookieBtn").addEventListener("click", function(){
    const input = document.getElementById("cookie")
    const cookie = "Info=" +input.value + ";"
    const expiration = "expires=" + new Date(2023,10,10) + ";"
    const path = "path=/;"
    document.cookie = cookie + expiration + path
    input.value = ""
})

document.getElementById("cookie2Btn").addEventListener("click", function(){
    const input = document.getElementById("cookie")
    const cookie = "Info=" + input.value + ";"
    const expiration = "expires=" + new Date(2023,10,10) + ";"
    const path = "path=/;"
    document.cookie = cookie + expiration + path
    input.value = ""
})