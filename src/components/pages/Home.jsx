import ParticlesBackground from '../../components/ParticlesBackground.jsx'
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef, useEffect, useState} from "react"
import foreground from "../../../src/assets/homepage-layers/layer1.svg"
import midLayer1 from "../../../src/assets/homepage-layers/layer2.svg"
import midLayer2 from "../../../src/assets/homepage-layers/layer3.svg"
import midLayer3 from "../../../src/assets/homepage-layers/layer4.svg"
import midLayer4 from "../../../src/assets/homepage-layers/layer5.svg"
import mountains from "../../../src/assets/homepage-layers/layer6.svg"
import downArrow from "../../../src/assets/navigation-icons/arrow-down.svg"

const layers = [ mountains, midLayer4, midLayer3, midLayer2, midLayer1, foreground]

export default function Home(props){

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const [arrowVisibility, setArrowVisibility] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
          setArrowVisibility("60px")
        }, 5400);
        return () => clearTimeout(timer);
      }, []);

    const {handleClick, aboutRef} = props

    const homepageLayers = layers.map((layer, i) => {

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
           
            <div className='homepage--text'>
                <p >
                    Hi there. I'm Alex from London, and I develop software for 
                    people who want to create <b>outstanding digital experiences.</b>
                </p>

                <div className="arrow-container" style={{height: arrowVisibility}}>
                <img className="arrow" src={downArrow} onClick={() => handleClick(aboutRef)} />

                </div>
            </div>
           
            {homepageLayers}

            <ParticlesBackground/>
        </div>
    )
}