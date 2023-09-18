import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from "react"



import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"

function App() {

  
  return (
    <div>
      
          <Navbar />
          <Parallax pages={3} style={{top:'0', left:'0'}} className="parent">
          <Home className="parallax"/>
          <About className="parallax"/>
        

          <Work className="parallax"/>
          <Contact className="parallax" />
          </Parallax>





    </div>
  )
}

export default App
