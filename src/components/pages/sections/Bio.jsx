import link from "../../../assets/navigation-icons/link.svg"
import BioAvatar from "./BioAvatar"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import CV from "../../../assets/CV.pdf"

export default function Bio(){

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.9 1"]
    })
    
    const scaleY = useTransform(scrollYProgress, [0, 1], [0.8, 1])

    return(
        <motion.div 
            className="about--bio"
            ref={ref}
            style={{
                opacity: {scrollYProgress},
                scale: scaleY
            }}
        >
            <BioAvatar />

            <p className="about--bio--text">
            During the pandemic, I decided to learn to code. Three years on, I’ve trained at a software development start-up, 
            worked for a <a href="https://kandaconsulting.co.uk/" target="_blank">communications agency</a>, and developed <a href="https://27kingstreet.co.uk/" target="_blank">websites</a> for people like Marks & Spencer. 
            Equipped with a deep passion for React and JS ES6, I am devoted to creating mouthwatering UIs. 
            Away from the screen, you’ll find me in my garden or in the kitchen – always creating something.
            <br />
            <br />
                <span className="about--bio--resume">
                    <a href={CV} target="_blank">CV</a><img src={link} className="about--bio--resume--icon"/>
                </span>
            </p>
            
        </motion.div>
    )
}