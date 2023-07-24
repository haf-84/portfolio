import Banner from './Banner';
import Image from './Image';
import Footer from "./Footer";
import Collapse from "./Collapse";
import image2 from "../assets/image2.png";

function About(){
    return (
        <div>
            <main>
            <Banner/>
            <Image imageUrl={image2}/>
            <div className='collapse-container'>
            <Collapse title='Fiabilité'>
                <span>Les annonces postées sur Kasa garantissent une fiabilité totale.</span>
            </Collapse>
            <Collapse title='Respect'>
                <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</span>
            </Collapse>
            <Collapse title='Service'>
                <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</span>
            </Collapse>
            <Collapse title='Sécurité'>
                <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
            </Collapse>
            </div>
            </main>
            <Footer/>
        </div>
    )
}
export default About