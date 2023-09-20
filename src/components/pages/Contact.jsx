import ContactForm from "./sections/ContactForm"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Contact() {
    return(
        <ParallaxLayer offset={3} factor={1} speed={0.5} className="contact parallax-layer">
        <section>
            <div className="contact--content">
            <h1>Contact</h1>
            <ContactForm />
            </div>
            
        </section>
        </ParallaxLayer>
    )
}