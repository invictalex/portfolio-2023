import Projects from "./sections/Projects"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Work() {
    return(
        <ParallaxLayer offset={1.45} speed={0.8} factor={2.3} className="work parallax-layer">
        <section> 
            <div className="work--content">
            <Projects />
            </div>
            
        </section>
        </ParallaxLayer>
    )
}