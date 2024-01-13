import { Random } from "random-js";

export default function randomString(size) {
    const random = new Random()
    const randomStr = random.string(size, 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz")
        return randomStr
}

