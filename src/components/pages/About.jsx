import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Bio from "./sections/Bio"
import Technologies from "./sections/Technologies"

export default function About() {
    return(
        <ParallaxLayer offset={0.99} speed={0.7} factor={1.2} className="about parallax-page" >
            <section>
                <Bio />
                <span className="about--divider"></span>
                <Technologies />
            </section>
        </ParallaxLayer>
    )
}