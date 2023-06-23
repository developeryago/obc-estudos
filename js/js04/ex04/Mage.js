const Character = require("./Character")

class Mage extends Character {
    constructor(name, healthPoints, atk, def, magic){
        super(name, healthPoints, atk, def)
        this.magic = magic
    }

    attacking(characterAtk){
        const result =  characterAtk.healthPoints - ((this.atk + this.magic) - characterAtk.def)
        if (result > 0){
            console.log(`O personagem ${characterAtk.name} sobreviveu, lhe sobraram ${result} pontos de vida.`)
        } else{
            console.log(`O personagem ${characterAtk.name} faleceu -_-`)
        }
    }

    heal(characterHealing){
        const addition = characterHealing.healthPoints + (this.magic * 2)
        return characterHealing.healthPoints = addition
    }
}

/*const zm = new Mage("Zé da Manga", 5000, 3000, 10000, 1000)
const jf = new Character("João Frango", 7000, 2000, 2000)


zm.heal(jf)
console.log(jf)*/

module.exports = Mage


