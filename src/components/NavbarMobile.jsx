export default function NavbarMobile(props){

    var y = props.YPosition

    return(
        <nav className="mobileNav" style={{display: 500 <= y  ? "block" : "none" }}>
            {(293 <= y && 893 >= y) && <div>About</div>}
            {(893 <= y && 2300 >= y) && <div>Projects</div>}
            {(2300 <= y) && <div>Contact</div>}
        </nav>
    )
}