class Character {
    constructor(name,healthPoints, atk, def){
        this.name = name
        this.healthPoints = healthPoints
        this.atk = atk
        this.def = def
    }

    attacking(characterAtk){
        const result =  characterAtk.healthPoints - (this.atk - characterAtk.def)
        if (result > 0){
            console.log(`O personagem ${characterAtk.name} sobreviveu, lhe sobraram ${result} pontos de vida.`)
        } else{
            console.log(`O personagem ${characterAtk.name} faleceu -_-`)
        }
    }
}

/*const zeDaManga = new Character("Zé da Manga", 5000, 8000, 800)
const joaoFrango = new Character("João Frango", 8000, 9000, 7000)

zeDaManga.attacking(joaoFrango)*/

module.exports = Character