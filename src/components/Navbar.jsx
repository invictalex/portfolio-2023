import { useRef } from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import {useState} from "react"


export default function Navbar(props){



    var {current} = props.reference

    return(
       <nav style={{color: props.YPosition >= 200 ? "var(--light)": "var(--darkest)"}}>
            <p onClick={() => current.scrollTo(0) }>Home</p>
            <p onClick={() => current.scrollTo(0.59)} >About</p>
            <p onClick={() => current.scrollTo(1.25)}>Work</p>
            <p onClick={() => current.scrollTo(2.75)}>Contact</p>
        </nav>
    )
}