while (true){
    let option = prompt("---Calculadora Geométrica---" + 
    "\n1) Área do Retângulo: base * altura" + 
    "\n2) Área do Triângulo: base * altura / 2" + 
    "\n3) Área do Quadrado: lado²" + 
    "\n4) Área do Trapézio: (base maior + base menor) * altura /2" +
    "\n5) Área do Círculo: pi * raio²" +
    "\n6) Sair")
    if (option == 1){
        let base = parseFloat(prompt("Qual é a base do retângulo?"))
        let height = parseFloat(prompt("Qual é a altura do retângulo?"))
        function calcRet(base, height){
            return base * height
        }
        alert(`O retângulo de base ${base} e altura ${height} tem como área ${calcRet(base, height)}`)
    } else if (option == 2){
        let base = parseFloat(prompt("Qual é a base do triângulo?"))
        let height = parseFloat(prompt("Qual é a altura do triângulo?"))
        function calcTri(base, height){
            return (base * height) / 2
        }
        alert(`O triângulo de base ${base} e altura ${height} tem como área ${calcTri(base, height)}`)
    } else if (option == 3){
        let side = prompt("Qual é o tamanho dos lados do quadrado?")
        function calcSquire(s){
            return s * s
        }
        alert(`Um quadrado de lados com valor ${side} tem área igual à ${calcSquire(side)}`)
    } else if (option == 4){
        let largeBase = prompt("Qual é o comprimento da base maior?")
        let smallBase = prompt("Qual é o comprimento da base menor?")
        let height = prompt("Qual é a altura? ")
        function calcTrap(lb, sb, h){
            return (lb + sb) * h / 2
        }
        alert(`Um trapézio de base maior ${largeBase} e base menor ${smallBase} tem área ${calcTrap(largeBase,smallBase,height)}`)
    } else if (option == 5){
        let raio = prompt("Qual o raio do círculo? ")
        function calcCircle(r, pi = 3.14){
            return pi * (r * r)
        }
        alert(`Um círculo de raio ${raio} tem área igual a ${calcCircle(raio)}`)
    } else if (option == 6){
        alert("Encerrando...")
        break
    } else{
        alert("OPÇÃO INVÁLIDA!")
    }
}