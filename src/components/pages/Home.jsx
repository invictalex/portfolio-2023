import layer1 from "../../../src/assets/layers/layer1.svg"
import layer2 from "../../../src/assets/layers/layer2.svg"
import layer3 from "../../../src/assets/layers/layer3.svg"
import layer4 from "../../../src/assets/layers/layer4.svg"
import layer5 from "../../../src/assets/layers/layer5.svg"
import layer6 from "../../../src/assets/layers/layer6.svg"
import layer7 from "../../../src/assets/layers/layer7.svg"
import ParticlesBackground from '../../components/ParticlesBackground.jsx'

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import React, { useRef, useEffect} from "react"

const layers = [ layer6, layer5, layer4, layer3, layer2, layer1]



export default function Home(props){

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    

    const backgroundImages = layers.map((layer, i) => {

        const customMovement = useTransform(scrollYProgress, [0, 1], ["0%", `${50 - (i*10)}%`])

        return(
            <motion.div 
                key={i}
                className="homepage--layer" 
                style=
                {{
                    backgroundImage: `url(${layer})`, 
                    zIndex: i*10,
                    y: customMovement
                }}
            >
            </motion.div>
        )
            
    })

    return(
        <div ref={ref} className="homepage" >
            <div className="anchor home" ref={props.anchor}></div>
           

            <p className='homepage--text'>
                Hi there, I'm Alex from London, and I develop software for 
                people who want to create <b>outstanding digital experiences.</b>
            </p>


            {backgroundImages}

            <ParticlesBackground/>
        </div>
    )
}