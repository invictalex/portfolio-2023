import ContactForm from "./sections/ContactForm"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Contact(props) {


    return(
        <section ref={props.reference} className="contact" >
            <div className="contact-form--info">
                <h1>Contact</h1>
                <p>If you'd like to contact me, fill out the form and I'll be in touch.</p>
            </div>
           
            <ContactForm />
        </section>
    )

}