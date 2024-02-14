import { useEffect, useState } from 'react'
import './App.css'

async function fetchPokemon() {
   // fetch("https://pokeapi.co/api/v2/pokemon")
  // .then((resp) => resp.json())
  // .then((data) => console.log(data.results))
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await response.json()
  return data.results
}

function App() {
  const [pokemon, setPokemon] = useState([])
  
  useEffect(() => {
    fetchPokemon().then(results => {
    console.log("requisição realizada")
    console.log(results)
    setPokemon(results)
  })
  
  }, [])
 
  return (
    <>
     <h2>Pokémon</h2>
    <div className="app">
      <ul className='pokemon'>
      {pokemon.map(poke => (
        <li key={poke.name}>
          <span>{poke.name}</span>
          <button>Ver detalhes </button>
        </li>
      ))}
      </ul>
    </div>
    </>
  )
}

export default App
