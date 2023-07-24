import Banner from './Banner';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Page404(){
    return(
        <div>
            <main>
            <Banner />
            <div className='page404-container'>
                <p className='page404-404'>404</p>
                <p className='page404-oups'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className='page404-lien'>Retourner sur la page d'accueil</Link>
            </div>
            </main>
            <Footer />
        </div>
    )
}
export default Page404