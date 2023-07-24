function sandSpaceship(name:string, captain:string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão!`)

    return spaceship
}

function acelerate(targetSpeed: number, spaceship: { name: string, speed: number}) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed){
        alert(`Aumentando a velociade da ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`A valocidade se mantém`)
    }
}

const spaceshipName = prompt("Insira o nome da nave: ")
const spaceshipCapitain = prompt("Insira o nome do piloto: ")

const MilleniumFalcon = sandSpaceship(spaceshipName, spaceshipCapitain)

const spped = Number(prompt("Digite a velocidade que deseja alcançar: "))

acelerate(spped, MilleniumFalcon)

