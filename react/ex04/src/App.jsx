import Interface from "./components/Interface"
import Title from "./components/Title"
import { Description } from "./components/Description"
import RadioButtons from "./components/RadioButtons"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <div className="body">
      <div className="container">

        <Title></Title>

        <Description></Description>

        <RadioButtons></RadioButtons>

        <Buttons></Buttons>

        <div id="result">
        </div>
        
      </div>
      
      <Footer></Footer>
      
    </div>
    </>
  )
}

export default App
