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
                In 2020, as the world stood still, I took the opportunity to teach myself to code.
                Since then, I've studied, worked for two companies, and created websites for people
                like John Lewis and Marks & Spencer. Equipped with a deep passion for JavaScript and React, 
                I am on a journey to push digital software to its full capabilities.
            </p>
            <div className="about--bio--resume"><a href="">Résumé</a><img src={link} className="about--bio--resume--icon"/></div>
            
        </div>

    )
}