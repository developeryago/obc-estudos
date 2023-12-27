import Style from "./style.module.css"

export default function RadioButtons() {
    return <div className="radio-buttons">

            <div className="container-radios">
            <label htmlFor="num">Senha numérica</label>
            <input type="radio" name="radio" id="num" />
            </div>

            <div className="container-radios">
            <label htmlFor="str">Senha com letras</label>
            <input type="radio" name="radio" id="str" />
            </div>

            <div className="container-radios">
            <label htmlFor="alphaNum">Senha alfanumérica</label>
            <input type="radio" name="radio" id="alphaNum" />
            </div>
            
        </div>
}