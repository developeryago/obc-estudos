import Interface from "./components/Interface"
import Title from "./components/Title"
import { Description } from "./components/Description"
import RadioButtons from "./components/RadioButtons"
import Buttons from "./components/Buttons"
import Value from "./components/Value"
import Footer from "./components/Footer"
import Copywriting from "./components/Copywriting"

function App() {

  return (
    <>
    <div className="body">
      <div className="container">

        <Title></Title>

        <Description></Description>

        <RadioButtons></RadioButtons>

        <Buttons></Buttons>

        <Value></Value>
        
      </div>
      
      <Copywriting/>

      <Footer></Footer>
      
    </div>
    </>
  )
}

export default App
