import ContactForm from "./sections/ContactForm"
import { ParallaxLayer } from '@react-spring/parallax'


export default function Contact() {
    return(
        <ParallaxLayer offset={2} factor={1} speed={0.5} className="contact parallax-page">

            <section className="content">
                <h1>Contact</h1>
                <ContactForm />
            </section>

        </ParallaxLayer>
    )
}