import { useState } from 'react'
import Profile from './components/Profile'
import ProfileLogo from "../public/yago-img.jpg"
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Profile 
     avatar={ProfileLogo}
     name="Yago Machado"
     bio="Front-end Developer (Javascript, React, Sass & Node)"
     phone="(21) 990598268"
     email="contato.yagomachado@outlook.com"
     githubUrl="https://github.com/developeryago"
     linkedinUrl="https://www.linkedin.com/in/developeryago/"
     instagramUrl="https://www.instagram.com/o.yagomachado"></Profile>
    </>
  )
}

export default App
