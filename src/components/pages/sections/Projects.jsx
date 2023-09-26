import { data } from "../../../data"


export default function Projects() {

    const projects = data.projects.map((project, i) => (
        <div className="project-card" key={i}>
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
        </div>
    ))

    return(
    <div className="projects">
        {projects}
    </div>
    )
}