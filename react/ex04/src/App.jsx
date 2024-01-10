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

  const onChange = (ev) => {
    const { value, type, checked} = ev.target
    let res = type === "checkbox" ? checked : value
    if (res === "num") {
      console.log(res)
    setPassword(randomNumber())
    } else if (res === "str") {
    setPassword(randomString())
    } else if (res === "alphaNum") {
    setPassword(randomAlphanumeric())
    }
    return res
}



  return (
    <>
    <div className="body">
      <div className="container">

      <Title></Title>

      <Description></Description>

      <div className={"radioButtons"}>

        <div className={"containerRadios"}>
        <label htmlFor="num">Senha numérica</label>
        <input onChange={onChange} type="radio" name="radio" id="num" value="num"/>
        </div>

        <div className={"containerRadios"}>
        <label htmlFor="str">Senha com letras</label>
        <input onChange={onChange} type="radio" name="radio" id="str" value="str"/>
        </div>

        <div className={"containerRadios"}>
        <label htmlFor="alphaNum">Senha alfanumérica</label>
        <input onChange={onChange} type="radio" name="radio" id="alphaNum" value="alphaNum"/>
        </div>

      </div>
        

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
