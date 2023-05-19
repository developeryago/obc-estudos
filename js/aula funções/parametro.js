function dobro(){
    let number = prompt("Digite um número para calcularmos o dobro dele: ")
    alert(`O dobro de ${number} é ${number * 2}`)
}

//dobro()

function criateUser(userName, email, pass, type = "adm"){
    const user = {
        userName, //mesmo que userName: userName
        email,
        pass,
        type
    }
    console.log(user)
}

criateUser("Yago", "contato.yagomachado@outlook.com", 123456)