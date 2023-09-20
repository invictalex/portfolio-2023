import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef, useEffect, useState} from "react"

import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"

function App() {
  const ref = useRef()

  const [YPosition, setYPosition] = useState(0)

  const handleScroll = () => ref.current && setYPosition(ref.current.current)
  console.log(YPosition)

  useEffect(() => {
    const myApp = document.querySelector('.app')
    myApp.addEventListener('scroll', handleScroll)
    return () => {myApp.removeEventListener('scroll', handleScroll)}
  }, [])

  return (
  <Parallax pages={4} style={{top:'0', left:'0'}} ref={ref} className="app" >
      
    <ParallaxLayer sticky={{start: 0, end: 3}} className="container--nav">
      <Navbar reference={ref} YPosition={YPosition}/>
    </ParallaxLayer>

    <Home />
    <About />
    <Work />
    <Contact />

  </Parallax>



      
   
  )
}

export default App
