import { data } from "../../../data"
import { motion, useScroll, useTransform } from "framer-motion"
import {useRef} from "react"


export default function Projects() {

    const projects = data.projects.map((project, i) => {

        const ref = useRef(null)

        const {scrollYProgress} = useScroll({
            target: ref,
            offset: ["0 1", "0.9 1"]
        })
        
        const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1])

        return(
        <motion.div 
            className="project-card" key={i}
            ref={ref}
            style={{
                opacity: scrollYProgress,
                scale: scaleY
            }}
        >
            <div className="project-image" style={{backgroundImage: `url(${project.image}`}}>
                <a href={project.url} target="_blank"></a>
            </div>
            <div className="project-info">
                <h3 className="project-info--title">            
                    {project.name}
                </h3>
                <h6 className="project-info--type">
                    {project.type} project — {project.languages}
                </h6>
                <p className="project-info--text">
                    {project.text}
                </p>
                <div className="project-info--buttons">
                    <a className="button"
                        href={project.url}
                        target="_blank"
                    > 
                        Visit
                    </a>
                    
                    {project.code && 
                    <a className="button"
                        href={project.code}
                        target="_blank"
                    >
                        Code
                    </a>}
                </div>
            </div>
        </motion.div>
    )})

    return(
    <div className="projects">
        {projects}
    </div>
    )
}