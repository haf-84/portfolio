import logo2 from '../assets/logo2.png'
function Footer(){
    return(
        <div className='kasa-footer'>
            <img src={logo2} alt="kasa" className='kasa-logo'></img>
            <div>
                <p className='footer-copyrights'>© 2023 Réalisé par Hafida S.</p>
            </div>
        </div>
    )
}
export default Footer