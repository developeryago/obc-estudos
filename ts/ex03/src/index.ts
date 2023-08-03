const allUsers: User[] = []

interface User {
    name: string,
    id: number,
    login: string,
    bio: string,
    public_repos: number,
    repos_url:string,
    message?: "Not Found!"
}

interface UserRepository {
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}

async function getUser(name: string) {
    const response = await fetch(`https://api.github.com/users/${name}`)
    const userJson: User = await response.json()
    if (userJson.message) {
        console.log("Usuário não encotrado")
    } else {
        allUsers.push(userJson)
        console.log(
            `O Usuário ${userJson.name} foi salvo!
            id: ${userJson.id}
            login: ${userJson.login}
            bio: ${userJson.bio }
            repositórios: ${userJson.public_repos}
            url: ${userJson.repos_url}`
        )
    }
    // saveUser(userJson)
}

// function saveUser(userJson: User) {
//     const user: User = {
//         name: userJson.name,
//         id: userJson.id,
//         login: userJson.login,
//         bio: userJson.bio,
//         public_repos: userJson.public_repos,
//         repos_url: userJson.repos_url
//     }
    
//     return user
// }

async function showUserRepository (userName: string) {
    const user = allUsers.find(user => user.login === userName)
    if (typeof user !== "undefined") {
        const response = await fetch(user.repos_url)
        const repos: UserRepository[] = await response.json()
        let message = ""
        repos.forEach( repo => {
            message += `Repositórios: 
                Nome: ${repo.name}
                Descrição: ${repo.description}
                Estrelas: ${repo.stargazers_count}
                É u fork: ${repo.fork? "Sim" : "Não"} \n`
        })
        console.log(message)
        // UserRepository(userJson)
    } else {
        console.log("Usuário inválido!")
    }
    
}

// function UserRepository(user: UserRepository) {
//     const repos: UserRepository = {
//         name: user.name,
//         description: user.description,
//         fork: user.fork,
//         stargazers_count: user.stargazers_count
//     }
//     console.log(repos)
// }

function sumRepository() {
    let sum = 0
    allUsers.forEach(user => {
       sum +=  user.public_repos
    })
    console.log(`Soma total do número de repositórios: ${sum}`)
}

function showAllUsers () {
    let list = `Lista de Usuários pesquisados: \n`

    allUsers.forEach(user => {
        list += ` - ${user.login}`
    })
    console.log(list)
}

function showTop5Users () {
    const userArray = allUsers.slice().sort((user1, user2) => user2.public_repos - user1.public_repos).slice(0, 5)
    
    let list = `Usuários com mais repositórios: \n`

    userArray.forEach(user => {
        list += `${user.login} com ${user.public_repos} repositórios \n`
    })
    console.log(list)
}

async function main() {
    await getUser("developeryago")
    await getUser("gustavoguanabara")
    await getUser("isaacpontes")
    await showUserRepository("gustavoguanabara")
    await showAllUsers()
    await sumRepository()
    showTop5Users()
}

main()