import ProjectCards from "./sections/ProjectCards"
import { motion, useScroll } from "framer-motion"

export default function Work(props) {

   
    const {scrollYProgress} = useScroll({
        target: props.reference,
        offset: ["0 1", "0.2 1"]
    })
     
    return(
        <motion.section 
            ref={props.reference} 
            className="work" 
            style={{
                opacity: scrollYProgress,
            }}
        >
            <div className="anchor" ref={props.anchor}></div>
            <h1 >Projects</h1>
            <div className="work--content">

            <ProjectCards />
            </div>
            
        </motion.section>
    )
}