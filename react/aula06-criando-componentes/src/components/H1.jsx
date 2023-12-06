export default function H1() {
    const frame = false
    return <h1 style={{
      color: frame ? "#00ff9f" : "#4169e1"
    }}>{frame ? "Meu futuro": "React"}</h1>
  }