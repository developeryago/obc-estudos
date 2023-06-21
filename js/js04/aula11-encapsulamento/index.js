class User{
    #password
    #balance
    constructor (account){
        this.account = account
        this.email = account.email
        this.#password = account.password
        this.#balance = 10
    }

}

const myAccount = {
    username: "yago_machado",
    email: "contato.yagomachado@outlook.com",
    password: 123456
}


const newUser = new User(myAccount.password)
console.log(newUser)