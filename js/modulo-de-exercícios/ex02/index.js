function chunks(number) {
   if (number === 0 || number < 0) {
    return " "
   } else if ( number === 1) {
    return "chunk"
   } else {
    return "chunk - " + chunks(number - 1)
   }
}

console.log(chunks(8))