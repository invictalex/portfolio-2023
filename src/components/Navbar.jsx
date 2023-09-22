import { useRef } from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import {useState} from "react"


export default function Navbar(props){

   const {handleClick, homeRef, aboutRef, projectsRef, contactRef, 
        viewingHome, viewingAbout, viewingProjects, viewingContact} = props

    
    const pages = [
        [homeRef, viewingHome, "Home"], 
        [aboutRef, viewingAbout, "About"], 
        [projectsRef, viewingProjects, "Projects"], 
        [contactRef, viewingContact, "Contact"]
    ] 

    const navItems = pages.map((page, i) => {

        return(
        <div className="nav-item" key={i} onClick={() => handleClick(page[0])}>

            <span style={{display: page[1] ? "block" : "none"}} className="selector" ></span>
            {page[2]}
        </div>
        )
    })

    return(
       <nav style={{"--nav-color": viewingHome ? "var(--darkest)" : "var(--light)"}}>
           {navItems}
        </nav>
    )
}