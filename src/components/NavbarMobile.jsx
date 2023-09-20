export default function NavbarMobile(props){

    var y = props.YPosition

    return(
        <nav className="mobileNav" style={{display: 500 <= y  ? "block" : "none" }}>
            {(293 <= y && 893 >= y) && <p>About</p>}
            {(893 <= y && 2000 >= y) && <p>Projects</p>}
            {(2000 <= y) && <p>Contact</p>}
        </nav>
    )
}