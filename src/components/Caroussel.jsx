import '../styles/Caroussel.css';

function Caroussel(props) {
    const location = props.location;

    return(
        <div className='gallery'>
            <p>{location.id}</p>
            <img src={location.cover}/>
        </div>
    );
}

export default Caroussel;