 class User{
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if (email === this.email && password === this.password){
            console.log("Login efetuado com sucesso!")
        } else{
            console.log("Email ou senha incorretos")
        }
    }
}

const Yago = new User("Yago Machado", "contato.yagomachado@outlook.com", 12345678)
console.log(Yago)
Yago.login("contato.yagomachado@outlook.com", 12345678)
