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
let allUsers = [];
function getUser(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const responde = yield fetch(`https://api.github.com/users/${name}`);
        const userJson = yield responde.json();
        saveUser(userJson);
    });
}
function saveUser(userJson) {
    const user = {
        name: userJson.name,
        id: userJson.id,
        login: userJson.login,
        bio: userJson.bio,
        public_repos: userJson.public_repos,
        repos_url: userJson.repos_url
    };
    allUsers.push(user);
    return user;
}
function showUserRepository(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const responde = yield fetch(`https://api.github.com/users/${name}/repos`);
        const userJson = yield responde.json();
        UserRepository(userJson);
    });
}
function UserRepository(user) {
    const repos = {
        name: user.name,
        description: user.description,
        fork: user.fork,
        stargazers_count: user.stargazers_count
    };
    console.log(repos);
}
function sumRepository() {
    let sum = 0;
    allUsers.forEach(user => {
        sum += user.public_repos;
    });
    return sum;
}
function showAllUsers() {
    let list = `Lista de Usuários pesquisados: \n`;
    allUsers.forEach(user => {
        list += ` - ${user.name}`;
    });
    return list;
}
function showTop5Users() {
    const userArray = [];
    let valueRepos;
    allUsers.forEach(user => {
        if (user.public_repos > valueRepos) {
            valueRepos = user.public_repos;
            userArray.unshift(user);
        }
    });
    return userArray;
}
getUser("developeryago");
showUserRepository("developeryago");
