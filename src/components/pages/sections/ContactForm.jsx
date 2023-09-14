import { useState } from "react"
import { db } from "/src/firebase"
import {addDoc, collection, serverTimestamp} from "firebase/firestore"

export default function Contact() {

    const empty = {
        name: "",
        email: "",
        message: "",
    }

    const [formData, setFormData] = useState(empty)

    const handleChange = (e) =>{
        
        const {id, value} = e.target 
            
        setFormData(prevData =>({
            ...(prevData && prevData),
            [id] : value,
        }))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const {name, email, message} = formData

        if (name && email && message) {
            await addDoc(collection(db, "messages"), {
                name: name,
                email: email,
                message: message,
                timestamp: serverTimestamp()
            })
        }

        setFormData(empty)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                id="name"
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                id="email"

            />
            <textarea 
                name="message" 
                 cols="30" rows="10" 
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                id="message"

            >
            </textarea>

            <button>Submit</button>
        </form>
    )
}