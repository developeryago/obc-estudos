const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(name, email) {
        const userexists = App.findUser(email)
        if (!userexists) {
            this.#users.push(new User(name, email))
        } else{
            alert("ERROR!")
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email) 
            if (user) {
                const newDeposit = new Deposit(value)
                user.account.newDeposit(newDeposit)
            }
        
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser) {
          const newTransfer = new Transfer(fromUser, toUser, value)
          fromUser.account.addTransfer(newTransfer)
          toUser.account.addTransfer(newTransfer)
        }
      }

    static loan(email, value, numberInstallment) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberInstallment)
            user.account.newLoan(newLoan)
        }
    }

    static switchRate(percenty) {
        Loan.switchRate(percenty)
    }
}