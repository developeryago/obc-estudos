import { useState } from 'react'
import './App.css'
import removeGame from '../modules/removeGame'

function App() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
  const [games, setGame] = useState(() => {
    const storageGames = localStorage.getItem("obc-game-lib")
    const gameArray = JSON.parse(storageGames)
    return gameArray
  })

  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGame(state => {
      const newState = [game, ...state]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  
  }

  function removeGame(id) {
    setGame(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
}
  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title, cover})
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
        <div className="games">
          {games.map((game) => (
            <div key={game.id}>
              <img src={game.cover} alt="" />
              <div>
                <h2>{game.title}</h2>
                <button
                onClick={() => removeGame(game.id)}>Remover</button>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </>
  )
}

export default App
