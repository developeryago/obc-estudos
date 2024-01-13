import { useState } from "react"
import style from "./style.module.scss"

export default function Value(props) {
    const [copieted, setSwitchClass] = useState("")



    function copyToClipboard() {
        setSwitchClass("sucsses")
        props.setCopyText("Copiado")

        window.navigator.clipboard.writeText(props.password)
      }
	
    return (
        <div class={style.value}>
            <input 
            type="text" 
            id={style.result} 
            value={props.value}
            disabled/>
            <button 
            id={style.copyToClipboard}
            onClick={copyToClipboard}
            className={copieted}>
            {props.copyText}
            </button>
        </div>
    )
}