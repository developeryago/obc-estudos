module.exports = class Loan {
    static #rate
    constructor(value, date){
        this.value = value 
        this.date = date
    }

    static get readRate(){
        return this.#rate
    }

    static set switchRate(value) {
        const percent = value
        
    }
}