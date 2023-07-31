let planets: Planet[] = []

type Situation = "habitado" | "habitável" | "inabitável" | "inexplorado"

type Coordinate = [number, number, number, number]

type Planet = {
    name: string
    coordinate: Coordinate
    situation: Situation
    satellites: string[]
}

function createPlanet (name: string, coordinate: Coordinate, situation: Situation) {
    planets.push({name,
        coordinate,
        situation,
        satellites: []
    })
    alert(`O Planeta ${name}, foi registrado!`)
}

function findPlanet (name: string) {
    let planet = planets.find(el => el.name === name)
    return planet ?? false 
}

function updateSituation (situation: Situation, planet: Planet) {
    planet.situation = situation
    alert(`A situação do Planeta ${planet.name} foi atualizada para ${situation}`)
}


function addSatellite (planet: Planet, satelliteName: string) {
    if (findPlanet(planet.name)) {
        planet.satellites.push(satelliteName)
        alert(`O satélite ${satelliteName}, foi adicionado ao planeta ${planet.name}`)
    } else {
        alert(`O satélite ${satelliteName} não pode ser adicionado`)
    }
}

function removeSatellite (planet: {name: string, coordinate: [number, number, number, number], situation: "habitado" | "habitável" | "inabitável" | "inexplorado", satellites: string[]}, satelliteName: string) {
    let findSatellite = planet.satellites.find(el => el === satelliteName)
    if (findPlanet(planet.name && findSatellite)) {
        const indexSatellite = planet.satellites.indexOf(satelliteName)
        planet.satellites.splice(indexSatellite, 1)
    }
}

function showPlanets () {
    let list = `Planetas registrados: \n`

    planets.forEach((planet: {
        name: string,
        coordinate: [number, number, number, number], 
        situation: "habitado" | "habitável" | "inabitável" | "inexplorado",
        satellites: []
    }) => {
        list += `
        Planeta: ${planet.name}
        Coordenada: ${planet.coordinate}
        Situação: ${planet.situation}`

        planet.satellites.forEach(satellite => {
            list += ` - ${satellite} \n`
        })
    })

    alert(list)
}

while (true) {
    const option = Number(prompt(`------Lista de Planetas------
    1) Salvar novo Planeta
    2) Alterar situação de um Planeta
    3) Adicionar satálite à Planetas
    4) Remover satélite de Planetas
    5) Exibir todos os Planetas registrados
    6) Sair`))

    if (option === 1) {
        const name = prompt("Qual o nome do planeta? ")
        const coordinate1  = Number(prompt("Coordenada 1: "))
        const coordinate2  = Number(prompt("Coordenada 2: "))
        const coordinate3  = Number(prompt("Coordenada 3: "))
        const coordinate4  = Number(prompt("Coordenada 4: "))
        const situation = Number(prompt(`Qual a situação? 
        1) Habitado
        2) Habitável
        3) Inabitável
        4) Inexporado`
        ))
        if (situation === 1) {
            const st = "habitado"
            createPlanet(name,[coordinate1, coordinate2, coordinate3, coordinate4], st)
        } else if (situation === 2) {
            const st = "habitável"
            createPlanet(name,[coordinate1, coordinate2, coordinate3, coordinate4], st)
        } else if (situation === 3) {
            const st = "inabitável"
            createPlanet(name,[coordinate1, coordinate2, coordinate3, coordinate4], st)
        } else if (situation === 4) {
            const st = "inexplorado"
            createPlanet(name,[coordinate1, coordinate2, coordinate3, coordinate4], st)
        }
        
    } else if (option === 2) {
        const planet = "Qual o nome do planeta? "
        const situation = Number(prompt(`Qual a situação? 
        1) Habitado
        2) Habitável
        3) Inabitável
        4) Inexporado`))
        if (situation === 1) {
            const st = "habitado"
            updateSituation(st, planet)
        } else if (situation === 2) {
            const st = "habitável"
            updateSituation(st, planet)
        } else if (situation === 3) {
            const st = "inabitável"
            updateSituation(st, planet)
        } else if (situation === 4) {
            const st = "inexplorado"
            updateSituation(st, planet)
        }
    } else if (option === 3) {

    }
}