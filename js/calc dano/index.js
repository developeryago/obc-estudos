const atk = prompt("Qual é o poder de ataque do inimigo?")
if (atk > 8000){
    alert("UAU, é de mais de 8000!!")
}
const def = prompt("Qual é o seu poder de defesa?")
const shield = confirm("você está usando escudo?")
const life = parseFloat(prompt("Quais são seus pontos de vida?"))

if (atk <= def){
    alert(`Sua defesa é de ${def} e o ataque do oponente é de ${atk}, com isso o dano causado é igual a 0 e sua vida permanece em ${life}`)
} else if (atk > def && shield == false){
    alert(`Como você não está usando escudo seu dano será igual a diferença entre o ataque do seu oponente e sua defesa, totalizando então ${atk - def}`)
    if (atk - def > life){
        alert(`Já que sua defesa era de ${def} e seu dano foi de ${atk -def} sua vida zerou e você morreu -_-`)
    } else{
        alert(`Dessa forma lhe sobrou ${life - (atk - def)} pontos de vida`)
    }
} else if (atk > def && shield == true){
    alert(`Seu dano será igual a diferença entre o ataque do oponente e sua defesa /2, totalizando ${(atk - def) / 2} e sobrando assim ${life - (atk - def) /2} pontos de vida`)
}