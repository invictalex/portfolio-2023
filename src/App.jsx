import './App.css'
import { useRef, useEffect, useState} from "react"

import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"
import NavbarMobile from './components/NavbarMobile'
import ContentPages from './components/pages/ContentPages'

function App() {


  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    
    ref === homeRef ? scrollTo(0,0) : ref.current?.scrollIntoView({behaviour: "smooth"})
  }

  return (

    <>
      <Navbar 
        handleClick={scrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        projectsRef={projectsRef} 
        contactRef={contactRef}
      />

      <Home />
      <About reference={aboutRef}/>
      <Work reference={projectsRef} />
      <Contact reference={contactRef}  />
    </>

    
    




      
   
  )
}

export default App
