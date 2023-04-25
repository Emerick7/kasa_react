import '../styles/Caroussel.css';
import logements from '../assets/logements.json';

function Caroussel(props) {
    const housingId = props.housingId;

    let locationsArray = [];

    for(let i=0; i < logements.length; i++){
        const locations = logements[i];
        locationsArray.push(locations);
    }

    return(
        <div className='gallery'>
            <p>{housingId}</p>
            {locationsArray.map((location) => (
                if (housingId === location.id){
                    return(
                        <img src={location.pictures}/>
                    )
                };
            ))};
        </div>
    );
}

export default Caroussel;