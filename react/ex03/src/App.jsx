import { useState } from 'react'
import Profile from './components/Profile'
import './App.css'
import ProfileLogo from "../public/yago-img.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Profile avatar={ProfileLogo}></Profile>
    </>
  )
}

export default App
