import Projects from "./sections/Projects"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Work(props) {

    var y = props.YPosition

    return(
        <div className="work">
        {/* <section style={y >= 593 ? {opacity: 1} : {opacity: 0} }>  */}
        <section>
            <h1>Projects</h1>
            <div className="work--content">

            <Projects />
            </div>
            
        </section>
        </div>
    )
}