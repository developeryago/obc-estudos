const person = {
    club: "Liverpool",
    playersContracted: "Mac'Alister",
    position: "6º"
}

const name = person.club

const {playersContracted, position} = person
console.log(name, playersContracted, position)

function createRegister ({playersContracted, club, position}){
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        playersContracted,
        club,
        position
    }
}
const newPlayer = createRegister(person)
console.log(newPlayer)