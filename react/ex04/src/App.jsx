import Title from "./components/Title"
import { Description } from "./components/Description"
import RadioButtons from "./components/RadioButtons"
import Buttons from "./components/Buttons"
import Value from "./components/Value"
import Footer from "./components/Footer"
import Copywriting from "./components/Copywriting"
import { useState } from "react"

const onChange = (ev) => {
  const { value, type, checked} = ev.target
  let res = type === "checkbox" ? checked : value
  console.log(res)
  return res
}

function App() {
  const [password, setPassword] = useState("")
  let newPassword = ""
  const num = document.getElementById("num")
  const str = document.getElementById("str")
  const alphaNum = document.getElementById("alphaNum")

  function randomNumber() {
    const random = new Random()
    newPassword = random.string(8, "123456789")
    console.log(newPassword)
  }
  
  function randomString() {
    const random = new Random()
    newPassword= random.string(8, 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz")
    setPassword(newPassword)
  }

  function randomAlphanumeric() {
    const random = new Random()
    newPassword= random.string(8, 
        "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz")
    setPassword(newPassword)
  }


  function createPassword () {
      if (res === "num") {
        console.log(res)
      } else if (res === "str") {
        randomString()
      } else if (res === "alphaNum") {
        randomAlphanumeric()
      }
    }

  return (
    <>
    <div className="body">
      <div className="container">

      <div className={"containerTitle"}>
          Gerador de Senhas
        </div>

      <div className={"description"}>
        <h3>Selecione uma opção abaixo:</h3>
      </div>

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

        <div className={"buttons"}>
          <button onClick={createPassword}>Gerar</button>
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
