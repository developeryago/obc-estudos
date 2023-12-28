import style from "./style.module.css"

export default function Buttons() {
    return (
        <div className={style.buttons}>
          <button id="createPassword">Gerar</button>
          <button id="coppyToClipboard">Copiar</button>
        </div>
    )
}