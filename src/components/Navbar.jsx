import { useRef } from "react"
import { ParallaxLayer } from '@react-spring/parallax'
import {useState} from "react"


export default function Navbar(props){


    var y = props.YPosition


    var {current} = props.reference

    return(
       <nav style={{"--nav-color": y >= 200 ? "#ebefe8" : "#2a2d2b"}}>
            <div classname="item" onClick={() => current.scrollTo(0) }>
                <span style={{display: 293 >= y  ? "block" : "none" }}></span>
                Home
            </div>
            <div classname="item" onClick={() => current.scrollTo(0.59)}>
                <span style={{display: 293 <= y && 793 >= y  ? "block" : "none" }}></span>
                About
            </div>
            <div classname="item" onClick={() => current.scrollTo(1.25)}>
                <span style={{display: 793 <= y && 1293 >= y  ? "block" : "none" }}></span>
                Work
            </div>
            <div classname="item" onClick={() => current.scrollTo(2)}>
                <span style={{display: 1293 <= y ? "block" : "none" }}></span>
                Contact
            </div>
        </nav>
    )
}