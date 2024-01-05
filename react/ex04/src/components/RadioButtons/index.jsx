import style from "./style.module.css"
import { useState } from "react"
import randomNumber from "../../modules/randomNumber"
import randomString from "../../modules/randomString"
import randomAlphanumeric from "../../modules/randomAlphanumeric"

export default function RadioButtons(pros) {

    

 
  const onChange = (ev) => {
    const { value, type, checked} = ev.target
    let res = type === "checkbox" ? checked : value
    if (res === "num") {
      props.setPassword(randomNumber())
    } else if (res === "str") {
      setPassword(randomString())
    } else if (res === "alphaNum") {
      setPassword(randomAlphanumeric())
    }
    return res
  }

    return <div className={style.radioButtons}>

            <div className={style.containerRadios}>
            <label htmlFor="num">Senha numérica</label>
            <input onChange={onChange} type="radio" name="radio" id="num" />
            </div>

            <div className={style.containerRadios}>
            <label htmlFor="str">Senha com letras</label>
            <input onChange={onChange} type="radio" name="radio" id="str" />
            </div>

            <div className={style.containerRadios}>
            <label htmlFor="alphaNum">Senha alfanumérica</label>
            <input onChange={onChange} type="radio" name="radio" id="alphaNum" />
            </div>
            
        </div>
}