import './App.css'
import { Routes, Route, useLocation } from "react-router-dom"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"

function App() {

  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Parallax pages={4} style={{ top: '0', left: '0' }}>
        
          <ParallaxLayer offset={0} speed={2.5}>
            <Route index element={
              <Home />
            }/>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={2.5}>
            <Route path="/about" element={
              <About />
            }/>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={2.5}>
            <Route path="/work" element={
              <Work />
            }/>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={2.5}>
            <Route path="/contact" element={
              <Contact />
            }/>
          </ParallaxLayer>

        </ Parallax>
      </Routes>



    </div>
  )
}

export default App
