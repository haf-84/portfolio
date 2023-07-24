// import './src/App.css';
import Banner from './Banner';
import Image from './Image';
import Footer from './Footer';
import CardGallery from './CardGallery';
import image1 from "../assets/image.png";

function Home() {
    return (
      <div>
          <main>
            <Banner />
            <div className='banner-container'>
            <Image imageUrl={image1}/>
            <h1 className='home-h1'>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='kasa-gallery-container'>
              <CardGallery/>
            </div>
          
          </main>
          <Footer/>
      </div>
    );
  }
  
  
  export default Home;