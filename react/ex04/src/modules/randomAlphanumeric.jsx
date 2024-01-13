import { Random } from "random-js"

export default function randomAlphanumeric(size) {
    const random = new Random()
    const randomAlphanum = random.string(size, 
        "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz")
        return randomAlphanum
}