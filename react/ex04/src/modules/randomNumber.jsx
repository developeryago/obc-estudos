import { Random } from "random-js"

export default function randomNumber(size) {
    const random = new Random()
    const randomNum = random.string(size, "123456789")
    return randomNum
}