import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Bio from "./sections/Bio"
import Technologies from "./sections/Technologies"

export default function About() {
    return(
        <ParallaxLayer offset={0.99} speed={0.7} factor={1.3} className="about parallax-page" >
            <section>
                <h1>About</h1>
                <div className="about--content">
                <Bio />
                <span className="about--divider"></span>
                <Technologies />
                </div>
                
            </section>
        </ParallaxLayer>
    )
}