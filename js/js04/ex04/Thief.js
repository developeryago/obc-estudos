const Character = require("./Character")

class Thief extends Character{
    attacking(characterAtk){
        const result =  characterAtk.healthPoints - ((this.atk * 2) - characterAtk.def)
        if (result > 0){
            console.log(`O personagem ${characterAtk.name} sobreviveu, lhe sobraram ${result} pontos de vida.`)
        } else{
            console.log(`O personagem ${characterAtk.name} faleceu -_-`)
        }
    }
}

/*const doidao = new Thief("Zé da Manga", 1000, 2000, 5000)
const jf = new Character("João Frango", 7000, 2000, 2000)

doidao.attacking(jf)*/

module.exports = Thief