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
  const [pokemonShow, setPokemonShow] = useState(null)
  
  useEffect(() => {
    fetchPokemon().then(results => {
    console.log("requisição realizada")
    console.log(results)
    setPokemon(results)
  })
  
  }, [])

  const showDetails = async (url) => {
    const data = await fetch(url)
    .then(resp => resp.json())
    console.log(data)
    setPokemonShow(data)
  }
 
  return (
    <>
     <h2>Pokémon</h2>
    <div className="app">
      <ul className='pokemon'>
      {pokemon.map(poke => (
        <li key={poke.name}>
          <span>{poke.name}</span>
          <button onClick={() => showDetails(poke.url)}>Ver detalhes </button>
        </li>
      ))}
      </ul>
    </div>

    {pokemonShow && (
        <div>
          <h2>{pokemonShow.name}</h2>
          <img
            src={pokemonShow.sprites.front_default}
            alt=""
          />
          <div className="stat">
            <b>Tipo: </b>
            {pokemonShow.types.map(({ type }) => (
              <span key={type.name}>{type.name} </span>
            ))}
          </div>
          <div className="stat">
            <b>Altura: </b>{pokemonShow.height / 10} m
          </div>
          <div className="stat">
            <b>Peso: </b>{pokemonShow.weight / 10} Kg
          </div>
          <div className="stat">
            <b>Atributos</b>
            <ul>
              {pokemonShow.stats.map(({ base_stat, stat }) => (
                <li key={stat.name}>
                  {stat.name}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat">
            <b>Habilidades</b>
            <ul>
              {pokemonShow.abilities.map(({ ability, is_hidden }) => (
                <li key={ability.name}>
                  {ability.name}
                  {is_hidden && " (secreta)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default App
