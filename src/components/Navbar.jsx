import { useRef } from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import {useState} from "react"


export default function Navbar(props){


   const {handleClick, homeRef, aboutRef, projectsRef, contactRef} = props

    

    return(
       <nav >
            <div className="nav-item" onClick={() => handleClick(homeRef)}>
                <span ></span>
                Home
            </div>
            <div className="nav-item" onClick={() => handleClick(aboutRef)}>
                <span ></span>
                About
            </div>
            <div className="nav-item" onClick={() => handleClick(projectsRef)} >
                <span ></span>
                Projects
            </div>
            <div className="nav-item" onClick={() => handleClick(contactRef)}>
                <span ></span>
                Contact
            </div>
        </nav>
    )
}