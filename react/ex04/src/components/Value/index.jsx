import style from "./style.module.scss"

export default function Value(props) {
    return (
        <div class={style.value}>
            <input 
            type="text" 
            id={style.result} 
            value={props.value}
            disabled/>
            <button id={style.copyToClipboard}>Copiar</button>
        </div>
    )
}