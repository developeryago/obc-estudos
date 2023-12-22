import { useState } from 'react'


function App() {

  return (
    <>
    <div className="body">
      <div className="container">

        <div className="container-title">
          Gerador de Senhas
        </div>

        <div className="description">
          <h5>Selecione uma opção abaixo:</h5>
        </div>

        <div className="radio-buttons">

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
          

          <div className="container-radio">
            
            
            
           
          </div>
        </div>

        <div className="buttons">
          <button id="createPassword">Gerar</button>
          <button id="coppyToClipboard">Copiar</button>
        </div>

        <div id="result">
        </div>
        
      </div>
      <footer>Yago Machado &copy; 
        <a href="https://linkedin.com/in/developeryago" target='_blank'>Linkedin</a>
        <a href="https://github.com.developeryago" target='_blank'>Github</a>
        <a href="https://instagram.com/o.yagomachado" target='_blanck'>Instagram</a>
      </footer>
    </div>
    </>
  )
}

export default App
