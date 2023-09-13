import './App.css'
import { Routes, Route, useLocation } from "react-router-dom"

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

        <Route index element={
          <Home />
        }/>
        <Route path="/about" element={
          <About />
        }/>
        <Route path="/work" element={
          <Work />
        }/>
        <Route path="/contact" element={
          <Contact />
        }/>

      </Routes>



    </div>
  )
}

export default App
