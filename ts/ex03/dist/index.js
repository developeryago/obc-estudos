"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const allUsers = [];
function getUser(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/users/${name}`);
        const userJson = yield response.json();
        if (userJson.message) {
            console.log("Usuário não encotrado");
        }
        else {
            allUsers.push(userJson);
            console.log(`O Usuário ${userJson.name} foi salvo!
            id: ${userJson.id}
            login: ${userJson.login}
            bio: ${userJson.bio}
            repositórios: ${userJson.public_repos}
            url: ${userJson.repos_url}`);
        }
        // saveUser(userJson)
    });
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
function showUserRepository(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = allUsers.find(user => user.login === userName);
        if (typeof user !== "undefined") {
            const response = yield fetch(user.repos_url);
            const repos = yield response.json();
            let message = "";
            repos.forEach(repo => {
                message += `Repositórios: 
                Nome: ${repo.name}
                Descrição: ${repo.description}
                Estrelas: ${repo.stargazers_count}
                É u fork: ${repo.fork ? "Sim" : "Não"} \n`;
            });
            console.log(message);
            // UserRepository(userJson)
        }
        else {
            console.log("Usuário inválido!");
        }
    });
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
    let sum = 0;
    allUsers.forEach(user => {
        sum += user.public_repos;
    });
    console.log(`Soma total do número de repositórios: ${sum}`);
}
function showAllUsers() {
    let list = `Lista de Usuários pesquisados: \n`;
    allUsers.forEach(user => {
        list += ` - ${user.login}`;
    });
    console.log(list);
}
function showTop5Users() {
    const userArray = allUsers.slice().sort((user1, user2) => user2.public_repos - user1.public_repos).slice(0, 5);
    let list = `Usuários com mais repositórios: \n`;
    userArray.forEach(user => {
        list += `${user.login} com ${user.public_repos} repositórios \n`;
    });
    console.log(list);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getUser("developeryago");
        yield getUser("gustavoguanabara");
        yield getUser("isaacpontes");
        yield showUserRepository("gustavoguanabara");
        yield showAllUsers();
        yield sumRepository();
        showTop5Users();
    });
}
main();
