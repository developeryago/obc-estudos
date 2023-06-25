class Wallet {
    #amount
    #username

    constructor (){
        this.#amount = 100.99 * 100 // 10099
    }

    get amount() {
        return this.#amount / 100
    }

    set username(newUserName) {
        if (typeof newUserName === "string"){
            this.#username = newUserName
        } else{
            console.log("username must be of type string")
        }

    }

    get username(){
        return this.#username
    }
}

const myWallet = new Wallet()
myWallet.username = true

console.log(myWallet.amount)
console.log(myWallet.username)