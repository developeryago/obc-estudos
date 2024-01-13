import Title from "./components/Title"
import { Description } from "./components/Description"
import RadioButtons from "./components/RadioButtons"
import Value from "./components/Value"
import Footer from "./components/Footer"
import Copywriting from "./components/Copywriting"
import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  return (
    <>
    <div className="body">
      <div className="container">

      <Title></Title>

      <Description></Description>

      <RadioButtons 
      setPassword={setPassword}
      setCopyText={setCopyText}>        
      </RadioButtons>
        
      <Value
      value={password}
      copyText={copyText}
      setCopyText={setCopyText}
      password={password}></Value>

      </div>
      
      <Copywriting/>

      <Footer></Footer>
      
    </div>
    </>
  )
}

export default App
