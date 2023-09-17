

interface CelestialBody {
    name: string,
    mass: number
}

interface Star extends CelestialBody {
    age: number,
    planets: Planet[]
}

interface Planet extends CelestialBody {
    name: string,
    satellites: string[],
    population: number
    createSatellite: (name: string) => void
}

let sun: Star = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
}

class MilkyWayPlanet implements Planet {
    name: string
    mass: number
    satellites: string[]
    population: number

    constructor (name: string, mass: number, population: number){
        this.name = name
        this.mass = mass
        this.population = population
    }
    
    createSatellite(name: string) {
        //
    }

}

