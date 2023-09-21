import { ParallaxLayer } from '@react-spring/parallax'
import layer1 from "../../../src/assets/layers/layer1.svg"
import layer2 from "../../../src/assets/layers/layer2.svg"
import layer3 from "../../../src/assets/layers/layer3.svg"
import layer4 from "../../../src/assets/layers/layer4.svg"
import layer5 from "../../../src/assets/layers/layer5.svg"
import layer6 from "../../../src/assets/layers/layer6.svg"
import layer7 from "../../../src/assets/layers/layer7.svg"
import ParticlesBackground from '../../components/ParticlesBackground.jsx'

const layers = [ layer6, layer5, layer4, layer3, layer2, layer1]



export default function Home(){

    const backgroundImages = layers.map((layer, i) => {

        return(
            <ParallaxLayer speed={i/10} className="homepage-parallax">
                <div className="parallax-image-layer" style={{backgroundImage: `url(${layer})`}}></div>
            </ParallaxLayer>
        )
            
    })

    return(
        <div  className="homepage">
            <ParallaxLayer speed={1.5} className="homepage-tagline">

                <p className='tagline'>Hi there, I'm Alex from London, and I develop software for 
                people who want to create <b>outstanding digital experiences.</b></p>
            </ParallaxLayer>


            {backgroundImages}
            <ParticlesBackground/>
        </div>
    )
}