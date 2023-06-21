const Post = require("./Post")

class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }

    newPost(title, paragraph){
        const post = new Post(title, paragraph, this)
        this.posts.push(post)
        return post 
    }
}

module.exports = Author