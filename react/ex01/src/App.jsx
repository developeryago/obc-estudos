import { useState } from 'react'
import reactLogo from "/react.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        
      <img src={reactLogo} alt="react img" />
      </div>
      <h1>React</h1>
      <p>A biblioteca para interfaces de usuário web e nativas</p>
      <button>Aprenda React</button>
      <button>Referência da API</button>
      <hr />

      <div className="padding">
        <h1>Crie interfaces de usuário e componentes</h1>
      </div>
      <div className="padding">
        <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes</p>
      </div>
      <div className="padding">
        <hr />
      </div>
      <div className="padding">
        <h1>Escreva componentes com código e marcação</h1>
      </div>
      <div className="padding">
        <p>Componentes React são funções Javascript. A sintaxe de marcação é chamada JSX. É uma extensão dá linguagem Javascript popularizada pelo React</p>
      </div>
      <div className="padding">
        <hr />
      </div>
      
      <div className="paddding">
        <h1>Próximos passos</h1>
      </div>
      <ul>
        <li>Uso de dados dinâmicos no JSX </li>
        <li>Criação de novos componentes</li>
        <li>estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do Javascript</li>
      </ul>
    </>
  )
}

export default App
