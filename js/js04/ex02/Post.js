const Comment = require("./Comment")


class Post {
    constructor (title, paragraph, author){
        this.title = title
        this.paragraph = paragraph
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }
    
    addComment(content){
        this.comments.push(new Comment(content))
    }
}
module.exports = Post