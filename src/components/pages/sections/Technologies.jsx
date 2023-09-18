import { technologyData } from "../../../technology-data"

export default function Technologies() {

    var icons = technologyData.map((item, index) => (
        <div className="icon">
            <img src={item.image} className ="icon--image"/>
            <h6 className="icon--text">{item.name}</h6>
        </div>
    ))

    return(
        <div className="about--technologies">
            {icons}
        </div>
    )
}