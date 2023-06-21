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

module.exports = User

