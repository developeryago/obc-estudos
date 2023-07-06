const email = document.querySelector("#email")
const password = document.getElementById("pass")

document.querySelector("form").addEventListener("submit", (ev) => {
    ev.preventDefault()
   try{
        validetedEmail(email.value)
        validedPass(password.value)
   } catch (error){
        console.log("An error ocorred!")
        console.log(error.messege)
   } finally{
        console.log(`O usiário ${email.value} foi cadastrado`)
   }
})



function validetedEmail(e) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(e);
}

function validedPass(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
  
  

/*function validetedForm() {
    const fixedEmail = email.replace(/\s/g, "")
    try {
        fixedEmail.match(/@/g)
        fixedEmail.match(/(?=\@)\d+(?=\.)/)
        fixedEmail.match(/(?<=\.)\d/)

    } catch(error) {
        console.log("an error ocurred!")
        console.log(error.message)
    }
}*/