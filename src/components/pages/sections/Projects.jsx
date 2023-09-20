import { data } from "../../../data"


export default function Projects() {

    const projects = data.projects.map((project, i) => (
        <div className="project-card">
            <div className="project-image" style={{backgroundImage: `url(${project.image}`}}>
                <a href={project.url} target="_blank"></a>
            </div>
            <div className="project-info">
                <h3 className="project-info--title">            
                    {project.name}
                </h3>
                <h6 className="project-info--type">
                    {project.type} project
                </h6>
                <p className="project-info--text">
                    {project.text}
                </p>
                <div className="project-info--links">
                    <div className="project-info--link">
                        <a 
                            className="project-info--links--url"
                            href={project.url}
                            target="_blank"
                        > 
                            Visit
                        </a>
                    </div>
                    
                    {project.code && 
                    <div className="project-info--link">
                        <a 
                            className="project-info--links--code"
                            href={project.code}
                            target="_blank"
                        >
                            Code
                        </a>
                    </div>}
                </div>
            </div>
        </div>
    ))

    return(
    <div className="projects">
        {projects}
    </div>
    )
}