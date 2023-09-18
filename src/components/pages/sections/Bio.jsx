import avatar from "../../../assets/avatar.svg"
import avatarHover from "../../../assets/avatarHover.svg"
import {useState} from "react"
import BioAvatar from "./BioAvatar"

export default function Bio(){

    const [avatarStatus, setAvatarStatus] = useState(avatar)

    return(
        <div className="about--bio">
            <BioAvatar />
            
            <p className="about--bio--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
        </div>

    )
}