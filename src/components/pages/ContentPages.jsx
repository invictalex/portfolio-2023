import React from "react"
import About from "../pages/About"
import Work from "../pages/Work"
import Contact from "../pages/Contact"
import {ParallaxLayer} from '@react-spring/parallax'

export default function ContentPages(){

    return(
        <ParallaxLayer offset={1} factor={5} speed={0.6} className="content-pages">
            <About />
            <Work />
            <Contact />
        </ParallaxLayer>
    )

}