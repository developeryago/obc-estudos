import style from "./style.module.css"

export default function RadioButtons() {
    return <div className={style.radioButtons}>

            <div className={style.containerRadios}>
            <label htmlFor="num">Senha numérica</label>
            <input type="radio" name="radio" id="num" />
            </div>

            <div className={style.containerRadios}>
            <label htmlFor="str">Senha com letras</label>
            <input type="radio" name="radio" id="str" />
            </div>

            <div className={style.containerRadios}>
            <label htmlFor="alphaNum">Senha alfanumérica</label>
            <input type="radio" name="radio" id="alphaNum" />
            </div>
            
        </div>
}