function renderArticle(articleData) {
    const article = document.createElement("article")
    article.classList.add("article")
    article.id = `article-${articleData.id}`

    const title = document.createElement("h3")
    title.classList.add("article-title")
    title.textContent = articleData.title

    const content = document.createElement("div")
    content.classList.add("title-content")
    content.textContent = articleData.content

    const author = document.createElement("div")
    author.classList.add("author")
    author.textContent = articleData.author

    article.append(title, content, author)
    document.querySelector("#articles").append(article)
}

async function fetchArticles () {
    const articles = await fetch("http://localhost:3000/articles").then( resp => resp.json())
    articles.forEach(renderArticle)
}

document.addEventListener("DOMContentLoaded", fetchArticles())

document.querySelector("form").addEventListener("submit", async (ev) => {
    ev.preventDefault()

    const articleData = {
        title: document.querySelector("#title").value,
        author: document.querySelector("#author").value,
        content: document.querySelector("#content").value
    }

    const response = await fetch(" http://localhost:3000/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleData),
    })
    const savedArticle = await response.json()
    document.querySelector("form").reset()
    renderArticle(savedArticle)
    console.log(savedArticle)
})