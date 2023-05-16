const valor = prompt("Digite um valor em metros (m):")
const valorN = parseFloat(valor)
const option = prompt("Qual a opção de conversão desejada?\n1) Milímetro (mm) \n2) Centímetro (cm)\n3) Decímetro (dm)\n4) Decâmetro(dam) \n5) Hectômetro(hm) \n6)Quilômetro (km)")
const optionN = parseFloat(option)

switch (optionN){
    case 1:
        alert(`O valor em metros ${valorN} convertido para Milímetros fica ${valor * 1000}`)
        break
    case 2:
        alert(`O valor em metros ${valorN} convertido para Centímetros fica ${valor * 100}`)
        break
    case 3:
        alert(`O valor em metros ${valorN} convertido para Decímetros fica ${valor * 10}`)
        break
    case 4:
        alert(`O valor em metros ${valorN} convertido para Decâmetro fica ${valor / 10}`)
        break
    case 5:
        alert(`O valor em metros ${valorN} convertido para Hectõmetro fica ${valor / 100}`)
        break
    case 6:
        alert(`O valor em metros ${valorN} convertido para Quilômetros fica ${valor / 1000}`)
        break
    default:
        alert("valor inválido, tente novamente!")
}
