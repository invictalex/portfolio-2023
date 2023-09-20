import { data } from "../../../data"

export default function Technologies() {

    const makeIcons = (a, b) => {
        var icons = data.technologies.map((item, i) => {

            if (i >= a && i < b){
                return (
                <div className="icon">
                    <img src={item.url} className ="icon--image"/>
                    <h6 className="icon--text">{item.name}</h6>
                </div>
                )
            }
        })
        return icons
    }

    const makeRows = () =>{
        const iconRow1 = makeIcons(0, 3)
        const iconRow2 = makeIcons(3, 7)
        const iconRow3 = makeIcons(7, 11)
        const iconRow4 = makeIcons(11, 14)

        const iconRows = [iconRow1, iconRow2, iconRow3, iconRow4]

        return iconRows.map(iconRow => <div className="row">{iconRow}</div>)
    }

    return(
        <div className="about--technologies">
            <h3 className="technologies--heading">My technologies</h3>
            <div className="technologies--icons">
                {makeRows()}
            </div>
            
        </div>
    )
}