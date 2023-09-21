import Projects from "./sections/Projects"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Work(props) {

    var y = props.YPosition

    return(
        <ParallaxLayer offset={1.55} speed={0.75} factor={3.05} className="work parallax-layer">
        <section style={y >= 593 ? {opacity: 1} : {opacity: 0} }> 
            <h1>Projects</h1>
            <div className="work--content">

            <Projects />
            </div>
            
        </section>
        </ParallaxLayer>
    )
}