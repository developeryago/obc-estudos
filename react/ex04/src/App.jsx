import Title from "./components/Title"
import { Description } from "./components/Description"
import RadioButtons from "./components/RadioButtons"
import Buttons from "./components/Buttons"
import Value from "./components/Value"
import Footer from "./components/Footer"
import Copywriting from "./components/Copywriting"
import { useState } from "react"
import randomNumber from "./modules/randomNumber"
import randomString from "./modules/randomString"
import randomAlphanumeric from "./modules/randomAlphanumeric"



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
        

      <div class={"value"}>
          <input type="text" id={"result"} 
          disabled
          value={password}/>
          <button id={"copyToClipboard"}>Copiar</button>
      </div>

      </div>
      
      <Copywriting/>

      <Footer></Footer>
      
    </div>
    </>
  )
}

export default App
