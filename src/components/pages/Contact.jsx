import ContactForm from "./sections/ContactForm"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Contact() {
    return(
        <ParallaxLayer offset={3} factor={1} speed={0.9} className="contact parallax-layer">
        <section>
            <div className="contact-form--info">
                <h1>Contact</h1>
                <p>If you'd like to contact me, fill out the form and I'll be in touch.</p>
            </div>
           
            <ContactForm />
            
        </section>
        </ParallaxLayer>
    )

}