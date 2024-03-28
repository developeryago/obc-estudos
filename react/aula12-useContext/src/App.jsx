import { useState } from 'react'
import './App.css'
import userContext from './contexts/Context'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)
  const user = {
    nome: "Yago",
    email: "contato.yagomachado@outlook.com",
    tel: "21 99059-8268"
  }
  return (
    <userContext.Provider value={user}>
     <h1>useContext</h1>
     <User></User>
    </userContext.Provider>
  )
}

export default App
