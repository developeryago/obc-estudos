import Title from "./components/Title"
import { Description } from "./components/Description"
import RadioButtons from "./components/RadioButtons"
import Value from "./components/Value"
import Footer from "./components/Footer"
import Copywriting from "./components/Copywriting"
import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")

  



  return (
    <>
    <div className="body">
      <div className="container">

      <Title></Title>

      <Description></Description>

      <RadioButtons 
      setPassword={setPassword}>        
      </RadioButtons>
        
      <Value
      value={password}>
      </Value>

      </div>
      
      <Copywriting/>

      <Footer></Footer>
      
    </div>
    </>
  )
}

export default App
