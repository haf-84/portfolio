import Banner from './Banner';
import Image from './Image';
import Footer from "./Footer";
import Collapse from "./Collapse";
import image2 from "../assets/image2.png";

function Contact(){
    return (
        <div>
            <main>
            <Banner/>
            <Image imageUrl={image2}/>
            <div className='collapse-container'>
            <Collapse title='Comment me contacter'>
                <p>Je vous propose plusieurs moyens pour me contacter:</p>
                <ul>
                    <li><a href='mailto:hafidas@gmail.com' className='link-contact-info'>Par mail, en donnant le plus de détails possibles sur votre demande.</a></li>
                    <li><a href="tel:+760247863" className='link-contact-info'>Par téléphone: au 07 60 24 78 63</a></li>
                </ul>
            </Collapse>
            
            </div>
            </main>
            <Footer/>
        </div>
    )
}
export default Contact