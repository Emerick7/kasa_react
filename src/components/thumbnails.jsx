import React, { useEffect, useState } from 'react';
import '../styles/Thumbnails.css';
import {Link} from 'react-router-dom';

function Thumbnails() {
    const [locations, setLocations] = useState([]);

    useEffect( () => {
        fetch('/data/logements.json')
        .then(res => res.json())
        .then(data => {
            setLocations(data);
        })
        .catch(error => {
            console.error(error);
        });
    },[]);

    return(
        <div className='wrapper'>
            {locations.map((location) => (
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