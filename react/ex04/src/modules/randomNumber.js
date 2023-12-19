import { Random } from "random-js"

export default function randomNumber() {
    const random = new Random()
    const aleatoryNumber = random.string(5-8, "A-Z")
    return console.log(aleatoryNumber)
}

randomNumber()