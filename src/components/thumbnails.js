import logements from '../assets/logements.json';
import '../styles/Thumbnails.css';

function Thumbnails() {
    let locationsArray = [];

    for(let i=0; i < logements.length; i++){
        const locations = logements[i];
        locationsArray.push(locations);
    }

    return(
        <div className='wrapper'>
            {locationsArray.map((location) => (
                <div key={location.id} className='card'>
                    <img src={location.cover}/>
                    <div className='gradient'></div>
                    <h3>{location.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Thumbnails;