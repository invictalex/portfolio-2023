import Bio from "./sections/Bio"
import Technologies from "./sections/Technologies"

export default function About(props) {


    return(
            <section ref={props.reference} className="about" >
                <h1 >About</h1>
                <div className="about--content">
                <Bio />
                <span className="about--divider"></span>
                <Technologies />
                </div>
                
            </section>
    )
}