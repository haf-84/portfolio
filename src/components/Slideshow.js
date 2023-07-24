import {useState} from 'react';

function Slideshow({pictures}){
    const [currentIndex,setCurrentIndex]=useState(0);

    const goToPrevious=()=>{
        setCurrentIndex((prevIndex)=>{
            if(prevIndex===0){
                return pictures.length-1;
            }
        return prevIndex-1;    
        });
    };
    const goToNext=()=>{
        setCurrentIndex((prevIndex)=>{
            if(prevIndex===pictures.length-1){
                return 0;
            }
            return prevIndex+1;
        });
    };
    //Vérification si galerie contient plus d'une image
    const shouldRenderSlideshow= pictures.length>1;
    return (
        <div className='slideshow'>
            {shouldRenderSlideshow && (
                <i className="fa-solid fa-chevron-left" onClick={goToPrevious}/>
            )}
            <div className='slideshow-image-container'>
                <img src={pictures[currentIndex]} className="slideshow-image" alt="logement kasa"/>
            </div>
            {shouldRenderSlideshow &&(
                <i className='fa-solid fa-chevron-right' onClick={goToNext}/>)}
                {shouldRenderSlideshow&&(
                <div className='slideshow-pagination'>
                    {currentIndex+1}/{pictures.length}
                </div>
            )}
        </div>
    )

}

export default Slideshow