import { useParams, Navigate } from "react-router-dom";
import data from './Data.json';
import Banner from "./Banner";
import Collapse from "./Collapse";
import Footer from "./Footer";
import Slideshow from "./Slideshow";


//utilisation de useParams hook pour récupérer le paramètre id de l'url 

function CardDetails(){
    const {id}= useParams();
    const card= data.find(item => item.id === id);

    // Redirection vers la page 404 si la card avec l'id spécifié n'est pas trouvé
    if(!card){
        return <Navigate to="/404"/>
    }
    //Fonction pour générer les étoiles (rating)
    const generateStars=()=>{
        const stars=[];
        const totalStars=5;
        for (let i = 0; i < totalStars; i++) {
            if (i < card.rating) {
              stars.push(<i className="fa-solid fa-star card-details-red-star" key={i} />);
            } else {
              stars.push(<i className="fa-solid fa-star card-details-grey-star" key={i} />);
            }
          }
        return stars
    }
    //Génération des détails de la card
    return(
        <div>
            <main>
            <Banner />
            <Slideshow pictures={card.pictures} className='slideshow'/>
            <div className="card-details-container">
                <div className="card-details-title-location">
                    <h1 className="card-details-title-location-h1">{card.title}</h1>
                    <p className="card-details-location">{card.location}</p>
                </div>
                <div className="card-details-host-info">
                    <p className="card-details-host-info-name">{card.host.name}</p>
                    <img className="card-details-img-host"src={card.host.picture} alt="hôte logement kasa"/>
                </div>
            </div>
            <div className="card-details-notation-tags">
                <ul className="card-details-tags">
                    {card.tags.map((tag,index)=>(
                        <li className="card-details-liste-tags" key={index}>{tag}</li>
                    ))}
                </ul>
                <div className="card-details-stars">
                    {generateStars()}
                </div>
            </div>
            <div className="card-details-description-equipements">
                <Collapse title="Description" className="card-details-title">
                    {card.description}
                </Collapse>
                
                <Collapse title="Équipements" className="card-details-description">
                    <ul className="content-mobile"> 
                    {card.equipments.map((equipment,index) => (
                        <li key={index}> {equipment}</li>
                    ))}
                    </ul>
                </Collapse>
            </div>
            </main>
            <Footer/>
        </div>
    )
}
export default CardDetails