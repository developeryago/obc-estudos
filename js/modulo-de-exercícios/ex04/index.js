function square(number) {
    const nToStr = number.toString()
    let resp = ""
    for (i = 0; i < nToStr.lenght; i ++) {
        resp += Math.pow(Number(nToStr[i]), 2).toString()
    }
    return Number(resp)
}
square(3514)