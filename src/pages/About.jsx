import React from 'react';
import '../styles/About.css';
import Header from '../components/Header'
import ImgTopper from '../components/ImgTopper';
import Dropdown from '../components/Dropdown';
import background from '../assets/background_img_topper_about.svg';

function About() {
    const dropdownContent = [
        {
            h4: "Fiabilité",
            article: ["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."],
        },
        {
            h4: "Respect",
            article: ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."],
        },
        {
            h4: "Service",
            article: ["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."],
        },
        {
            h4: "Sécurité",
            article: ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."],
        }];

    let dropdownContainerStyles = {
        margin: "0 0 33px 0",
        width: "80%",
    }

    let dropdownFontSize = {
        fontSize: "24px",
    }

    let imgTopperStyle;

    let mobileMediaQuery = window.matchMedia("(max-width: 480px)");

    if(mobileMediaQuery.matches) {
        dropdownContainerStyles = {}
        dropdownFontSize = {}
        imgTopperStyle = {
            height: "223px",
        }
    }

    return(
        <React.StrictMode>
            <Header />
            <ImgTopper background={background} imgTopperStyle={imgTopperStyle} />
            <div className='dropdowns-container'>
                {dropdownContent.map((dropdown, index) => <Dropdown key={`${dropdown}-${index}`} dropdownContent={dropdown} dropdownContainerStyles={dropdownContainerStyles} dropdownFontSize={dropdownFontSize}/>)}
            </div>
        </React.StrictMode>
    );
}

export default About;