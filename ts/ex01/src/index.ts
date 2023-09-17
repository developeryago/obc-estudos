const spaceships:any = []

function createSpaceship(name: string, pilot: string, crewLimit: number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }
    spaceships.push(spaceship)
    alert(`A nave ${name} foi criada`)
}

function addMembers (spaceshipPosition: number, quantify: number) {
    if(spaceships[spaceshipPosition].crewLimit > quantify) {
        spaceships[spaceshipPosition].crew.push(quantify)
    } else {
        alert("Quantidade de membros a ser adicionada excede a tripulação máxima, tente um número menor")
    }
}

function sendToMission (spaceshipPosition: number) {
    if (spaceships[spaceshipPosition].crewLimit / spaceships[spaceshipPosition].crew.reduce((total, num) => total + num, 0) > spaceships[spaceshipPosition].crewLimit * 0,33) {
        spaceships[spaceshipPosition].inMission = true 
    } else {
        alert(`A nave ${spaceships[spaceshipPosition].name} possui menos de 30% de sua capacidade ocupada, por isso não pode sair em missão.`)
    }
}

function showSpaceships () {
    alert(spaceships.forEach(element => {
        alert(element.value)
    }))
}

// function showMenu () {
//     option
// }

// switch (option) {
//     case 1:
//         const name = prompt("Qual o nome da nave? ")
//         const pilot = prompt("Qual o nome do piloto da nave? ")
//         const crewLimit = Number(prompt("Qual é a sua capacidade máxia? "))
//         createSpaceship(name,pilot, crewLimit );
//         break;

//     case 2:
//         const spaceshipPosition = Number(prompt("Qual a posição da nave na lista? "))
//         const quantify = Number(prompt("Qual a quantidade de tripulantes a ser adicionada? "))
//         addMembers(spaceshipPosition, quantify)
//         break;

//     case 3:
//         const spaceshipPosition2 = Number(prompt("Qual a posição da nave na lista? "))
//         sendToMission(spaceshipPosition2)
//         break;

//     case 4:
//         showSpaceships()
//         break;

//     case 5:
//         break;

//     default:
//         alert("Opção inválida!! \n Escolha uma opção entre 1 e 5.")

//     showMenu()
// }

while(true) {
    let option: number = Number(prompt(`-------Gerenciamento de Naves-------
    
    1) Adicionar nave
    2) Adicionar membros a tripulação
    3) Enviar nave em missão
    4) Exibir todas as naves
    5) Sair do programa
    `))
    if (option == 1) {
        const name = prompt("Qual o nome da nave? ")
        const pilot = prompt("Qual o nome do piloto da nave? ")
        const crewLimit = Number(prompt("Qual é a sua capacidade máxia? "))
        createSpaceship(name, pilot, crewLimit );
    } else if (option === 2) {
        const spaceshipPosition = Number(prompt("Qual a posição da nave na lista? "))
        const quantify = Number(prompt("Qual a quantidade de tripulantes a ser adicionada? "))
        addMembers(spaceshipPosition, quantify)
    } else if (option === 3) {
        const spaceshipPosition2 = Number(prompt("Qual a posição da nave na lista? "))
        sendToMission(spaceshipPosition2)
    } else if (option === 4) {
        showSpaceships()
    } else if (option === 5){
        break
    }else {
        alert("Opção inválida!! \n Escolha uma opção entre 1 e 5.")
    }
}