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
            <h3 className="technologies--heading">My technologies</h3>
            <div className="technologies--icons">
                {icons}
            </div>
            
        </div>
    )
}