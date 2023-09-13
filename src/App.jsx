import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default App
