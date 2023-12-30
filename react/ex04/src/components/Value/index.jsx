import style from "./style.module.css"

export default function Value() {
    return (
        <div class={style.value}>
            <input type="text" id={style.result} disabled/>
            <button id={style.copyToClipboard}>Copiar</button>
        </div>
    )
}