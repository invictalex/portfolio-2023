import './App.css'
import { useRef, useEffect, useState} from "react"
import { useInView, useScroll } from "framer-motion"


import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"

function App() {

  const homeRef = useRef(null)
  const viewingHome = useInView(homeRef)

  const aboutRef = useRef(null)
  const aboutNavRef = useRef(null)
  const viewingAbout = useInView(aboutNavRef)

  const projectsRef = useRef(null)
  const projectsNavRef = useRef(null)
  const viewingProjects = useInView(projectsNavRef)

  const contactRef = useRef(null)
  const contactNavRef = useRef(null)
  const viewingContact = useInView(contactNavRef)


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
      handleClick={scrollToSection}
      aboutRef={aboutRef}
    />
    <About 
      reference={aboutRef}
      anchor={aboutNavRef}
    />
    <Work 
      reference={projectsRef} 
      anchor={projectsNavRef}
    />
    <Contact 
      reference={contactRef}
      anchor={contactNavRef}  
    />
  </>

   
  )
}

export default App
