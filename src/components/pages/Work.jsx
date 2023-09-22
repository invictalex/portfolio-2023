import Projects from "./sections/Projects"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Work(props) {

    var y = props.YPosition

    return(
        <section ref={props.reference} className="work" >
            <h1 >Projects</h1>
            <div className="work--content">

            <Projects />
            </div>
            
        </section>
    )
}