const towns = ["Veneza", "Paris", "Nazaré", "Bale", "Mônaco"]

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push("Londres")

console.log({towns, townsCopy})

const townsClone = [...towns]
townsClone.push("New York")

console.log(towns, townsCopy, townsClone)