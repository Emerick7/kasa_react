import React, { useEffect, useState } from 'react';
import '../styles/HousingInfo.css';
import Header from '../components/Header';
import Caroussel from '../components/Caroussel';
import HousingHeader from '../components/HousingHeader';
import { useNavigate, useParams } from 'react-router-dom';

const HousingInfo = () => {
    let { housingId } = useParams();

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

    const naviguate = useNavigate();

    if(locations.length > 0){
        let locationSelected = locations.find(element => element.id === housingId)

        if(!locationSelected){
            naviguate('/error');
            return null;
        } else {
            return(
                <React.StrictMode>
                    <Header />
                    <div className='carousselContainer'>
                        <Caroussel slides={locationSelected.pictures} />
                    </div>
                    <HousingHeader housing={locationSelected} />
                </React.StrictMode>
            );
        }
    } else {
        return(
            <p>loading...</p>
        )
    }
}

export default HousingInfo;