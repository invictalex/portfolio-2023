import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Bio from "./sections/Bio"
import Technologies from "./sections/Technologies"

export default function About() {
    return(
        <div className="about" >
            <section>
                <h1>About</h1>
                <div className="about--content">
                <Bio />
                <span className="about--divider"></span>
                <Technologies />
                </div>
                
            </section>
        </div>
    )
}