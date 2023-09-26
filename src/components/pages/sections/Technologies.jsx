import { data } from "../../../data"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Technologies() {

    const makeIcons = (a, b) => {
        var icons = data.technologies.map((item, i) => {

            if (i >= a && i < b){
                return (
                <div className="icon" key={i}>
                    <img src={item.url} className ="icon--image"/>
                    <h6 className="icon--text">{item.name}</h6>
                </div>
                )
            }
        })
        return icons
    }

    const makeRows = () =>{
        const iconRow1 = makeIcons(0, 3)
        const iconRow2 = makeIcons(3, 7)
        const iconRow3 = makeIcons(7, 11)
        const iconRow4 = makeIcons(11, 14)

        const iconRows = [iconRow1, iconRow2, iconRow3, iconRow4]

        return iconRows.map((iconRow, i) => <div className="row" key={i}>{iconRow}</div>)
    }

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.9 1"]
    })
    
    const scaleY = useTransform(scrollYProgress, [0, 1], [0.8, 1])

    return(
        <motion.div 
            className="about--technologies"
            ref={ref}
            style={{
                opacity: {scrollYProgress},
                scale: scaleY
            }}
        >
            <h4 className="technologies--heading">My technologies</h4>
            <div className="technologies--icons">
                {makeRows()}
            </div>
            
        </motion.div>
    )
}