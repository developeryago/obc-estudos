import { useState } from 'react'
import './App.css'
import Card from "./components/Card"
import StwImg from "../public/img01.jpg"
import GofImg from "../public/god-of-war.jpg"
import Gta6 from "../public/gta6.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Card 
          title="Poster: Star Wars (1977)"
          poster={StwImg}></Card>
          <Card 
          title="Poster: God of War (2018)"
          poster={GofImg}></Card>
          <Card 
          title="Poster: GTA VI"
          poster={Gta6}></Card>
      </div>
    </>
  )
}

export default App
