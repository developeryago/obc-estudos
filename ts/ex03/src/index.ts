let allUsers: User[] = []

interface User {
    name: string,
    id: number,
    login: string,
    bio: string,
    public_repos: number,
    repos_url:string
}

interface UserRepository {
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}

async function getUser(name: string) {
    const responde = await fetch(`https://api.github.com/users/${name}`)
    const userJson = await responde.json()
    saveUser(userJson)
}

function saveUser(userJson: User) {
    const user: User = {
        name: userJson.name,
        id: userJson.id,
        login: userJson.login,
        bio: userJson.bio,
        public_repos: userJson.public_repos,
        repos_url: userJson.repos_url
    }
    allUsers.push(user)
    return user
}

async function showUserRepository (name: string) {
    const responde = await fetch(`https://api.github.com/users/${name}/repos`)
    const userJson = await responde.json()
    UserRepository(userJson)
}

function UserRepository(user: UserRepository) {
    const repos: UserRepository = {
        name: user.name,
        description: user.description,
        fork: user.fork,
        stargazers_count: user.stargazers_count
    }
    console.log(repos)
}

function sumRepository() {
    let sum = 0
    allUsers.forEach(user => {
       sum +=  user.public_repos
    })
    return sum
}

function showAllUsers () {
    let list = `Lista de Usuários pesquisados: \n`

    allUsers.forEach(user => {
        list += ` - ${user.name}`
    })
    return list
}

function showTop5Users () {
    const userArray: User[] = []
    let valueRepos: number
    allUsers.forEach( user => {
        if (user.public_repos > valueRepos) {
            valueRepos = user.public_repos
            userArray.unshift(user)
        }
    })
    return userArray
}

getUser("developeryago")
showUserRepository("developeryago")
