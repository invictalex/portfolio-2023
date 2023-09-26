import React from "react"
import backToTop from "../../../assets/back-to-top.svg"
import email from "../../../assets/email.svg"
import github from "../../../assets/github.svg"

export default function Footer(props){

    const {handleClick, goUp} = props

    return(
        <footer>
            <div className="back-to-top-button" 
                style={{backgroundImage: `url(${backToTop})`}}
                onClick={() => handleClick(goUp)}
            >

            </div>
            <div className="socials">
                <a 
                    style={{backgroundImage: `url(${email})`}}
                    href="mailto:alexchristodoulou@ymail.com"
                
                ></a>
                <a 
                    style={{backgroundImage: `url(${github})`}}
                    href="https://github.com/invictalex"
                    target="_blank"
                ></a>
            </div>
            <p>ALEX CHRISTODOULOU ©2023</p>
        </footer>
    )
}