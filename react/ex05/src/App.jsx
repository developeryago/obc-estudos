import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
  const [game, setGame] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log({title, cover})
    setTitle("")
    setCover("")
  }
  return (
    <>
      <div id="app">
        <h1>Biblioteca de Jogos</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título: </label>
            <input 
            type="text" 
            name='title' 
            id='title'
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}/>
          </div>
          <div>
            <label htmlFor="cover">Capa: </label>
            <input 
            type="text" 
            name='cover' 
            id='cover' 
            onChange={(ev => setCover(ev.target.value))}
            value={cover}/>
          </div>
          <button 
          type='submit'
          >Adicionar a biblioteca</button>
        </form>
      </div>
    </>
  )
}

export default App
