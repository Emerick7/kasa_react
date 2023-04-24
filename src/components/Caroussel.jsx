import '../styles/Caroussel.css';
import logements from '../assets/logements.json';

function Caroussel() {
    let locationsArray = [];

    for(let i=0; i < logements.length; i++){
        const locations = logements[i];
        locationsArray.push(locations);
    }

    return(
        <div className='gallery'>
            {locationsArray.map(() => ())
            }
        </div>
    );
}

export default ScrollingMenu;