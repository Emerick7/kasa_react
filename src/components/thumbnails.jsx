import logements from '../assets/logements.json';
import '../styles/Thumbnails.css';
import {Link} from 'react-router-dom';

function Thumbnails() {
    let locationsArray = [];

    for(let i=0; i < logements.length; i++){
        const locations = logements[i];
        locationsArray.push(locations);
    }

    return(
        <div className='wrapper'>
            {locationsArray.map((location) => (
                <Link to={`/housing-info/${location.id}`}>
                    <div key={location.id} className='card'>
                        <img src={location.cover}/>
                        <div className='gradient'></div>
                        <h3>{location.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Thumbnails;