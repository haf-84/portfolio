import {Link} from 'react-router-dom';

function Card({item}){
    const cardStyle = {
        backgroundImage: `url(${item.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return(
        <Link to={`/card/${item.id}`} className="card-link">
        <div className='card' style={cardStyle}>
            <h2 className='card-title'>{item.title}</h2>         
        </div>
        </Link>
    )
}

export default Card