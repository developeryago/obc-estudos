import { Random } from "random-js";

export default function randomString() {
    const random = new Random()
    const randomStr = random.string(8, 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz")
        return randomStr
}

