import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/work"><p>Work</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
        </nav>
    )
}