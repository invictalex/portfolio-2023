import { useRef } from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import {useState} from "react"


export default function Navbar(props){


    var y = props.YPosition


    var {current} = props.reference

    return(
       <nav style={{"--nav-color": y >= 200 ? "#ebefe8" : "#2a2d2b"}}>
            <div classname="item" onClick={() => current.scrollTo(0) }>
                <span style={{display: 400 >= y  ? "block" : "none" }}></span>
                Home
            </div>
            <div classname="item" onClick={() => current.scrollTo(0.59)}>
                <span style={{display: 400 <= y && 893 >= y  ? "block" : "none" }}></span>
                About
            </div>
            <div classname="item" onClick={() => current.scrollTo(1.3)}>
                <span style={{display: 893 <= y && 2000 >= y  ? "block" : "none" }}></span>
                Projects
            </div>
            <div classname="item" onClick={() => current.scrollTo(3)}>
                <span style={{display: 2000 <= y ? "block" : "none" }}></span>
                Contact
            </div>
        </nav>
    )
}