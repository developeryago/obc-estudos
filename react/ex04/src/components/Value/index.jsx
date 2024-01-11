import style from "./style.module.scss"

export default function Value(props) {
    
    function copyToClipboard(ev) {
        const btn = ev.currentTarget
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
            onClick={copyToClipboard}>{props.copyText}</button>
        </div>
    )
}