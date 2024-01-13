import style from "./style.module.scss"

export default function InputSize(props) {
    return (
        <div className={style.inputSize}>
            <span>Tamanho </span>
            <input 
            type="number" 
            min={1}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordSize(ev.target.value)}/>
        </div>
    )
}