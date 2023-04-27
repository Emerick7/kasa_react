import '../styles/HousingHeader.css';
import Host from './Host';
import Tag from './TAG';
import StarsRating from './StarsRating';

function HousingHeader(props) {
    const housing = props.housing;
    const title = housing.title;
    const location = housing.location;

    return (
        <div className='housing-header-container'>
            <div className='title-location-tags-container'>
                <h1>{title}</h1>
                <h2>{location}</h2>
                <Tag tags={housing.tags}/>
            </div>
            <div className='host-rating-container'>
                <Host host={housing.host}/>
                <StarsRating rating={housing.rating}/>
            </div>
        </div>
    );
}

export default HousingHeader;