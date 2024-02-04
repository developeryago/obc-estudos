import { useRef, useState } from "react"

export default function App() {
  let cont = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  function showValues() {
    alert(`
    Variável: ${cont}
    State: ${state}
    Ref: ${ref.current}`)
  }
  return (
    <div>
      <h1>Aula 09 useRef</h1>
      <p>Variável: {cont} | State: {state} | Ref: {ref.current}</p>
      <hr />
      <button onClick={() => cont++}>
        Aumentar Variável
        </button>
      <button onClick={() => setState(state => state + 1)}>
        Aumentar state
      </button>
      <button onClick={() => ref.current++}>
        Aumentar Ref
      </button>

      <hr />
      <button onClick={showValues}>Exibir valores</button>
    </div>
  )
}