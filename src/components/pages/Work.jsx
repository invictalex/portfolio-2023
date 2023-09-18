import Projects from "./sections/Projects"
import { ParallaxLayer } from '@react-spring/parallax'


export default function Work() {
    return(
        <ParallaxLayer offset={1.45} speed={0.8} factor={1.3} className="work parallax-page">

            <section section className="content"> 
                <h1>Work</h1>
                <Projects />
            </section>

        </ParallaxLayer>
    )
}