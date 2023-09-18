import { ParallaxLayer } from '@react-spring/parallax'
import layer1 from "../../../src/assets/layers/layer1.svg"
import layer2 from "../../../src/assets/layers/layer2.svg"
import layer3 from "../../../src/assets/layers/layer3.svg"
import layer4 from "../../../src/assets/layers/layer4.svg"
import layer5 from "../../../src/assets/layers/layer5.svg"
import layer6 from "../../../src/assets/layers/layer6.svg"
import layer7 from "../../../src/assets/layers/layer7.svg"

const layers = [layer7, layer6, layer5, layer4, layer3, layer2, layer1]



export default function Home(){

    const backgroundImages = layers.map((layer, i) => {

        return(
            <ParallaxLayer speed={i/10}>
                <div className="parallax-image-layer" style={{backgroundImage: `url(${layer})`}}></div>
            </ParallaxLayer>
        )
            
    })

    return(
        <div  className="homepage">
            {backgroundImages}
        </div>
    )
}