import Bio from "./sections/Bio"
import Technologies from "./sections/Technologies"
import { motion, useScroll } from "framer-motion"

export default function About(props) {

  const {scrollYProgress} = useScroll({
    target: props.reference,
    offset: ["0 1", "0.6 1"]
  })

    return(
      <motion.section 
          ref={props.reference} 
          className="about"
          style={{
              opacity: scrollYProgress
          }}
      >
          
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