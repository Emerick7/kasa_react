import React from 'react';
import '../styles/HousingInfo.css';
import Header from '../components/Header';
import Caroussel from '../components/Caroussel';
import { useParams } from 'react-router-dom';

function HousingInfo() {
    let { housingId } = useParams();

    return(
        <React.StrictMode>
            <Header />
            <Caroussel housingId={housingId} />
        </React.StrictMode>
    );
}

export default HousingInfo;