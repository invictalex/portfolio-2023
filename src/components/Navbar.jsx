import { useRef } from "react"
import { ParallaxLayer } from '@react-spring/parallax'


export default function Navbar(){


    return(
        <ParallaxLayer offset={0} sticky>
            <nav>
                <p>Home</p>
                <p>About</p>
                <p>Work</p>
                <p>Contact</p>
            </nav>
        </ParallaxLayer>
    )
}