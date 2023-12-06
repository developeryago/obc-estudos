import Title from "./components/Title"
import SubTitle from './components/SubTitle'
import H1  from './components/H1'
import styles from "./styles/css/App.module.css"


function App() {
  return ( 
    <div className={styles.app}>
    <Title></Title>
    <SubTitle></SubTitle>
    <H1></H1>
    </div>
  )
}
export default App 

