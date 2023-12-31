

const result = document.getElementById("result")
const num = document.getElementById("num")
const str = document.getElementById("str")
const alphaNum = document.getElementById("alphaNum")

document.getElementById("createPassword").addEventListener("click",() => {
    console.log("linkado")
    if (num) {
        result = randomNumber()
    } else if (str) {
        result = randomString()
    } else {
        result = randomAlphanumeric()
    }
})