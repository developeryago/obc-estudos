function PhoneNumber(phoneNumberStr) {
    const fixedStr = phoneNumberStr.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedStr.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedStr.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedStr.match(/(?<=\)).+/)[0].replace(/-/g, "")
}

console.log(new PhoneNumber("+55 (21) 99059-8268"))