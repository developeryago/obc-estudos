import { Random } from "random-js"

export default function randomNumber() {
    const random = new Random()
    const randomNum = random.string(8, "123456789")
    return randomNum
}