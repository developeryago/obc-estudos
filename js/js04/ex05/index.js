const App = require("./App");

App.createUser("Yago Machado", "yagomachado@email.com")
App.createUser("Little Toddy", "littetoddy@email.com")

App.deposit("yagomachado@email.com", 50000)
App.loan("littetoddy@email.com", 20000, 24)
App.transfer("yagomachado@email.com", "littletoddy@email.com", 5000)
console.log(App.findUser("yagomachado@email.com").account)
