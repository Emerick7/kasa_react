import '../styles/TAG.css';
import logements from '../assets/logements.json';

function Tag() {
    let locationsArray = [];

    for(let i=0; i < logements.length; i++){
        const locations = logements[i];
        locationsArray.push(locations);
    }

    return(
        <aside className='tag-container'>
            {locationsArray.map((location) => (
                location.tags.forEach(tag => {
                    <p>{location.tag}</p>
                })
            ))}
        </aside>
    );
}

export default Tag;