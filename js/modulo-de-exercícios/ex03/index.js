function reverseArray(...array) {
    let newArray = ""
    for (i = array.length - 1; i >= 0; i--){
        newArray += array[i] + ", "
    }
    return newArray
}

console.log(reverseArray("oh", "hi", "mark"))
console.log(reverseArray(4, 8, 2, 8))