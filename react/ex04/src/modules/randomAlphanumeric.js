import { Random } from "random-js"

export default function randomAlphanumeric() {
    const random = new Random()
    const randomAlphanum = random.string(8, 
        "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz")
        return randomAlphanum
}