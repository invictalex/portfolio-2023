import Projects from "./sections/Projects"
import { motion, useScroll, useTransform } from "framer-motion"


export default function Work(props) {

   
    const {scrollYProgress} = useScroll({
        target: props.reference,
        offset: ["0 1", "0.3 1"]
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

            <Projects />
            </div>
            
        </motion.section>
    )
}