import Bio from "./sections/Bio"
import Technologies from "./sections/Technologies"

export default function About() {
    return(
        <div className="page">
            <h1>About</h1>
            <Bio />
            <Technologies />
        </div>
    )
}