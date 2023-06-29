const Deposit = require("./Deposit")
const Loan = require("./Loan")

module.exports = class Account {
    #balance
    /*#account = {
        deposities: [],
        loan: [],
        transfers: [],
        user: {}
    }*/

    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get getBalance() {
        return this.#balance
    }

    newDeposit(deposit) {
        this.deposits.push(deposit)
        this.#balance += deposit.value  
    }

    newLoan(loan) {
        this.loans.push(loan)
        this.#balance += loan.value
    }

    newTransfer(transfer) {
        if (transfer.toUser.email === this.owner.email) {
          this.#balance += transfer.value
          this.transfers.push(transfer)
        } else if (transfer.fromUser.email === this.owner.email) {
          this.#balance -= transfer.value
          this.transfers.push(transfer)
        }
      }
}