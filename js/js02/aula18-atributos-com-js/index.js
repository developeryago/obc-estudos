const input = document.getElementById("input")

document.getElementById("value").addEventListener("click", function(){
    if (input.value === ""){
        input.value = "Hello World"
    } else if (input.value === "Hello World"){
        input.value = ""
    }
    console.log(input.value)
   console.log(input.getAttribute("value"))
})

document.getElementById("type").addEventListener("click", function(){
    input.type = input.type != "radio" ? "radio" : "text"
})

document.getElementById("placeholder").addEventListener("click", function(){
    input.placeholder = input.placeholder != "" ? "" : "Digite algo..."
})

document.getElementById("disable").addEventListener("click", function(){
    input.setAttribute("disabled", !input.deabled)
})

document.getElementById("data").addEventListener("click", function(){
    const data = input.dataset.something
    console.log("o valor do atributo data-something é: " + data)
    input.dataset.something = "Algum outro valor"
    console.log("o valor do atributo data-something agora é: " + input.dataset.something)
})