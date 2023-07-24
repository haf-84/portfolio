import data from './Data.json';
import Card from './Card';

function CardGallery(){
    return (
        <div className='card-gallery'>
            {data.map(function (item,id){
                return <Card key={id} item={item} />;
            })}
        </div>
    )
}

export default CardGallery