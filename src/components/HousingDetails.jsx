import { useEffect, useState } from 'react';
import '../styles/HousingDetails.css';
import Dropdown from './Dropdown';

function HousingDetails(props) {
    const housing = props.housing;
    const description = housing.description;
    const equipments = housing.equipments;

    const dropdownContent = [
        {
            h4: "Description",
            article: [description],
        },
        {
            h4: "Équipements",
            article: equipments,
        }];

    return (
        <div className='details-container'>
            {dropdownContent.map((dropdown) => <Dropdown dropdownContent={dropdown}/>)}
        </div>
    );
}

export default HousingDetails;