import avatar from "../../../assets/avatar.svg"
import link from "../../../assets/link.svg"
import {useState} from "react"
import BioAvatar from "./BioAvatar"

export default function Bio(){

    const [avatarStatus, setAvatarStatus] = useState(avatar)

    return(
        <div speed={0.8} className="about--bio">
            <BioAvatar />
            <p className="about--bio--text">
            During the pandemic, I decided to learn to code. Three years on, I’ve trained at a software development start-up, 
            worked for a communications agency, and developed websites for people like Marks & Spencer. 
            Equipped with a deep passion for React and JS ES6, I am devoted to creating mouthwatering UIs. 
            Away from the screen, you’ll find me in my garden or in the kitchen – always creating something.
            <br />
            <br />
                <span className="about--bio--resume">
                    <a href=""><b>CV</b></a><img src={link} className="about--bio--resume--icon"/>
                </span>
            </p>
           
            
        </div>

    )
}