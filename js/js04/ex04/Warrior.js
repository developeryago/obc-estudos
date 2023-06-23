const Character = require("./Character")

class Warrior extends Character {
    constructor(name, healthPoints, atk, def, shield, position){
        super(name,healthPoints, atk, def)
        this.shield = shield
        this.position = position
    }

    attacking(characterAtk){
        if (this.position === "attacking"){
            super.attacking(characterAtk)
        }else{
            return console.log(`O guerreiro ${this.name} está em posição de defesa`)
        }
    }

    switchPosition(){
        if (this.position === "attacking"){
            this.position = "defending"
            this.def + this.shield
        } else{
            this.position = "attacking"
            this.def -= this.shield
        }
    }
}

/*const zm = new Warrior("Zé da Manga", 10000, 5000, 3000, 500, "defending")
const jf = new Character("João Frango", 7000, 2000, 2000)

zm.switchPosition()
console.log(zm)*/

module.exports = Warrior