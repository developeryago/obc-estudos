import style from "./style.module.scss"
import randomNumber from "../../modules/randomNumber"
import randomString from "../../modules/randomString"
import randomAlphanumeric from "../../modules/randomAlphanumeric"

export default function RadioButtons(props) {

    const onChange = (ev) => {
        const { value, type, checked} = ev.target
        let res = type === "checkbox" ? checked : value
        if (res === "num") {
            console.log(res)
        props.setPassword(randomNumber(props.passwordSize))
        } else if (res === "str") {
        props.setPassword(randomString(props.passwordSize))
        } else if (res === "alphaNum") {
        props.setPassword(randomAlphanumeric(props.passwordSize))
        }
        props.setCopyText("Copiar")
        return res
    }

    return <div className={style.radioButtons}>

            <div className={style.containerRadios}>
            <label htmlFor="num">Senha numérica</label>
            <input 
            onChange={onChange} 
            type="radio" 
            name="radio" 
            id="num" 
            value="num"/>
            </div>

            <div className={style.containerRadios}>
            <label htmlFor="str">Senha com letras</label>
            <input 
            onChange={onChange} 
            type="radio" 
            name="radio" 
            id="str" 
            value="str"/>
            </div>

            <div className={style.containerRadios}>
            <label htmlFor="alphaNum">Senha alfanumérica</label>
            <input 
            onChange={onChange} 
            type="radio" 
            name="radio" 
            id="alphaNum" 
            value="alphaNum"/>
            </div>
            
        </div>
}