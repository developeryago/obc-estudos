const number = prompt("Escolha um resultado: \na)\nb)\nc)")

const numberFloat = parseFloat(number)

switch (numberFloat){
    case 1:
        alert("O resultado é 'a'")
        break
    case 2:
        alert("O resultado é 'b'")
        break
    case 3:
        alert("O resultado é 'c'")
        break
    default:
        alert("Finalizando...")
}
       
