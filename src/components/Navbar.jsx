export default function Navbar(props){

   const {handleClick, homeRef, aboutRef, projectsRef, contactRef, 
        viewingHome, viewingAbout, viewingProjects, viewingContact} = props

    
    const pages = [
        {
            ref: homeRef,
            inView: viewingHome,
            name: "Home"
        },
        {
            ref: aboutRef,
            inView: viewingAbout,
            name: "About"
        },
        {
            ref: projectsRef,
            inView: viewingProjects,
            name: "Projects"
        },
        {
            ref: contactRef,
            inView: viewingContact,
            name: "Contact"
        },
    ] 

    const navItems = pages.map((page, i) => {

        return(
        <div className="nav-item" key={i} onClick={() => handleClick(page.ref)}>

            <span style={{display: page.inView ? "block" : "none"}} className="selector" ></span>
            {page.name}
        </div>
        )
    })

    return(
       <nav style={{"--nav-color": viewingHome ? "var(--darkest)" : "var(--light)"}}>
           {navItems}
        </nav>
    )
}