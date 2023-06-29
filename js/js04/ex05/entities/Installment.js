module.exports = class Installment {
    constructor(valueInstallment, numberInstallment){
        this.valueInstallment = valueInstallment
        this.numberInstallment = numberInstallment
        this.situation = "pending"
    }
}