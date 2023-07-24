import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Banner(){

    return (
        <div className='kasa-banner'>
            <img src={logo} alt="kasa" className='kasa-logo'></img>
                <ul className='kasa-banner-ul'>
                    <li className='kasa-banner-li'> <Link to="/" className='kasa-banner-a'>Accueil</Link></li>
                    <li className='kasa-banner-li'><Link to="/About" className='kasa-banner-a'>A propos</Link></li>
                </ul>
        </div>
    )

}
export default Banner