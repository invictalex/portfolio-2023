import './App.css'
import { useRef, useEffect, useState} from "react"
import { useInView } from "framer-motion"


import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"

function App() {

  const homeRef = useRef(null)
  const viewingHome = useInView(homeRef)

  const aboutRef = useRef(null)
  const aboutAnchor = useRef(null)
  const viewingAbout = useInView(aboutAnchor)

  const projectsRef = useRef(null)
  const projectsAnchor = useRef(null)
  const viewingProjects = useInView(projectsAnchor)

  const contactRef = useRef(null)
  const contactAnchor = useRef(null)
  const viewingContact = useInView(contactAnchor)





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

      viewingHome={viewingHome}
      viewingAbout={viewingAbout}
      viewingProjects={viewingProjects}
      viewingContact={viewingContact}

    />

    <Home 
      anchor={homeRef}
    />
    <About 
      reference={aboutRef}
      anchor={aboutAnchor}
    />
    <Work 
      reference={projectsRef} 
      anchor={projectsAnchor}
    />
    <Contact 
      reference={contactRef}
      anchor={contactAnchor}  
    />
  </>

   
  )
}

export default App
