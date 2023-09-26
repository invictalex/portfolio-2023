import ContactForm from "./sections/ContactForm"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


export default function Contact(props) {

    const {scrollYProgress} = useScroll({
        target: props.reference,
        offset: ["0 1", "0.8 1"]
    })
    
    const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1])
    
    return(
        <motion.section 
        ref={props.reference} 
        className="contact" 
        style={{
            opacity: scrollYProgress,
            scale: scaleY
        }}
        >
            <div className="anchor" ref={props.anchor}></div>
            <div className="contact-form--info">
                <h1>Contact</h1>
                <p>If you'd like a website built, are interested in working together, or just want to reach out, fill out the form and I'll be in touch.</p>
            </div>
           
            <ContactForm />

        </motion.section>
    )

}