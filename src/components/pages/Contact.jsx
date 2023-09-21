import ContactForm from "./sections/ContactForm"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Contact(props) {

    var y = props.YPosition

    return(
        <div className="contact">
        {/* <section style={y >= 1940 ? {opacity: 1} : {opacity: 0} }> */}
        <section>
            <div className="contact-form--info">
                <h1>Contact</h1>
                <p>If you'd like to contact me, fill out the form and I'll be in touch.</p>
            </div>
           
            <ContactForm />
            
        </section>
        </div>
    )

}