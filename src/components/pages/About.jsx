import Bio from "./sections/Bio"
import Technologies from "./sections/Technologies"
import { motion, useScroll } from "framer-motion"


export default function About(props) {


    return(
            <motion.section ref={props.reference} className="about">
                
                <div className="anchor" ref={props.anchor}></div>
                <h1 >About</h1>
                <div className="about--content">
                <Bio />
                <span className="about--divider"></span>
                <Technologies />
                </div>
                
            </motion.section>
    )
}