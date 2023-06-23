class Vehicle{
    move(){
        console.log("O veículo está se movendo!")
    }
}

class Car extends Vehicle{
    move(){
        console.log("O carro está se movendo!")
    }
}

class Ship extends Vehicle{
    move(speed){
        console.log(`O navio está se movendo à ${speed}km/h !`)
    }
}

const civic = new Car
const titanic = new Ship

//titanic.move(50)
//civic.move()

function start (vehicle){
    console.log("Iniciando um veículo...")
    vehicle.move()
}

start(civic)
start(titanic)