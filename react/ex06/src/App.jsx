import { useState } from 'react'
import './App.scss'

function App() {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")
  const [comments, setComment] = useState(() => {
    const storageComment = localStorage.getItem("comment-lib")
    const commentArray = JSON.parse(storageComment)
    return commentArray
  })

  function handleSubmit(ev) {
    ev.preventDefault()
    addComment({email, text})
    setText("")
    setEmail("")
  }

  const addComment = ({email, text}) => {
    const id = Math.floor(Math.random() * 1000000)
    const hour = new Date().getDate
    const comments = {id, email, text, hour}
    console.log(comments)
    setComment(state => {
      const newState = [...state, comments]
      localStorage.setItem("comment-lib", JSON.stringify(newState))
      return newState
    })
  }
  return (
    <>
      <div className="app">
        <h2>Campo de Comentários</h2>
        <form onSubmit={handleSubmit}>
          <div className="container">

            <label htmlFor="email">E-mail:</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}/>
          </div>

          <div className="container">
            <label htmlFor="coment">Comentário</label>
            <textarea 
            name="coment" 
            id="coment" 
            cols="30" 
            rows="10"
            value={text}
            onChange={(ev) => setText(ev.target.value)}></textarea>
          </div>

          <div className="button">
            <button type='submit'>Enviar</button>
          </div>

        </form>

        
      </div>

      <div className='comments'>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h5 >{comment.email} {comment.hour}</h5>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
