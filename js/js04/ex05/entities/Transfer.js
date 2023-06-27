module.exports =  class Transfer{
    constructor(userSubmitted, userReceived, value, date) {
        this.userSubmitted = userSubmitted
        this.userReceived = userReceived
        this.value = value 
        this.date = date 
    }
}