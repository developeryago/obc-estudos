let person = {
    name: "Yago",
    age: 23,
    helloPerson(){
        console.log(`Olá ${this.name} você tem ${this.age} anos!`)
    }
}
person.helloPerson()