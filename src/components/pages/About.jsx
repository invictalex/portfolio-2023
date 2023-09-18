import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Bio from "./sections/Bio"
import Technologies from "./sections/Technologies"

export default function About() {
    return(
        <ParallaxLayer offset={0.96} speed={0.6}  >
            <div className="about" >
                <div className="about--content">
                <h1 style={{color: "white"}}>About</h1>
                <Bio />
                <Technologies />
                </div>
            </div>
        </ParallaxLayer>
    )
}