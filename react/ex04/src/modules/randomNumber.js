import { Random } from "random-js"

export default function randomNumber() {
    const random = new Random()
    const aleatoryNumber = random.string(8, "123456789")
    return console.log(aleatoryNumber)
}

randomNumber()