class Property{
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property{

}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse instanceof Property)

class Apartament extends Property{
    constructor(number, area, price){
       // this.area = area
       super(area, price)
       this.number = number
    }

    getFloor = () => this.number.slice(0, -2)
}

const apt = new Apartament("1645", 120, 300000)
console.log(`O Apartamento de ${apt.getPricePerSquareMeter()} por m² fica no ${apt.getFloor()}º andar`)