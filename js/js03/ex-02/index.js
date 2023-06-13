// import dayjs from 'dayjs'
const dayjs = require("dayjs")


// dayjs.locale('pt-br') // usar locale espanhol globalmente




const calculateDate = (date) => {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYers = today.diff(birthday, "year")
    console.log(`Idade: ${ageInYers}`)

    const nextBirthday = birthday.add(ageInYers + 1, "year")
    console.log(`Próximo aniversário: ${nextBirthday.format('dddd/DD/MM/YYYY')}`)

    const nextBirthdayInDays = nextBirthday.diff(today, "day") + 1
    console.log(`Dias até completar ${ageInYers + 1} anos: ${nextBirthdayInDays}`)
}

calculateDate("1999-10-10")