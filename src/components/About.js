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
            <Collapse title='Brève introduction'>
                <p>Après un master en finance obtenu en école de commerce et plusieurs expériences professionnelles dans ce domaine, j'ai décidé de me former au développement web depuis juin 2022.</p>
                <p>En effet, j'ai toujours été intéressée par l'informatique et de fil en aiguille, j'ai découvert le vaste monde du développement web.</p>
            </Collapse>
            <Collapse title='Formation'>
                <p>Pour transformer cette appétence du développement web en compétences, j'ai décidé de me former chez OpenClassrooms.</p>
                <p>J'ai suivi 2 formations : une première, en juin 2022, pour avoir un aperçu concret du développement web où je me suis initié à WordPress, CMS incontournable.</p>
                <p> Et une seconde, en vue d'obtenir le titre professionnel de développeur web.</p>
                <p>Aujourd'hui, je suis très intéressée par le front-end.</p>
            </Collapse>
            <Collapse title='Services proposés'>
                <p>Je vous propose mes services dans :</p>
                <ul>
                    <li>L'optimisation de vos sites;</li>
                    <li>L'intégration web;</li>
                    <li>La création de sites web avec WordPress (vitrines ou e-commerces)</li>
                </ul>
            </Collapse>
            </div>
            </main>
            <Footer/>
        </div>
    )
}
export default About