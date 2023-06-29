const Installment = require("./Installment")

module.exports = class Loan{
    static #rate = 1.05

    constructor(value, numberInstallment) {
        this.value = value
        this.numberInstallment = []
        for (let i = 1; i <= numberInstallment; i++){
            this.numberInstallment.push(new Installment((value * Loan.#rate) / numberInstallment, i))
        }
        this.date = new Date()
    }
    /*constructor(value, date, numberInstallment, situation, installment){
        super(this.valueInstallment, numberInstallment, situation)
        this.value = value
        this.date = date
        this.installment = calcInstallment(installment)
        this.#rate = 0.1
    }*/

    static get getRate(){
        return Loan.#rate
    }

    static set switchRate(value) {
        Loan.#rate = 1 + (value / 100)
    }
}