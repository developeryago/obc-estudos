const Author = require("./Author")



const ge = new Author("ge.com")
const post = ge.newPost("Fluminense x Galo", "Hoje às 21:30 ao vivo na Globo")
post.addComment("Vai ter gol do Cano")
post.addComment("faz o L")

console.log(post)

/*const commit = new Comment("Faz o L", "GE.com"):
const foot = new Post("Fluminense X Galo", "Hoje às 21:30 ao vivo na Globo", commit.content)
foot.addComment("Vai ser 3x1")
console.log(foot)*/