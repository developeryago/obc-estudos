class Reservation {
    constructor(guest, room, days) {
        this.guest = guest
        this.room = room
        this.days = days 
        this.total = days + Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee(){
        console.log(`Thie base fee is ${Reservation.baseFee}`)
    }

    static get premiumFee(){
        return Reservation.baseFee * 1.5
    }
}


const r1 = new Reservation("Yago Machado", 10, 3)
console.log(Reservation.showBaseFee())