import '../styles/Caroussel.css';
import React, { useState } from 'react';
import leftArrow from '../assets/left_arrow_gallery.svg';
import rightArrow from '../assets/right_arrow_gallery.svg';

function Caroussel(props) {
    const slides = props.slides;

    const [currentIndex, setCurrentIndex] = useState(0);

    //Style CSS
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "25px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex]})`
    };

    const leftArrowStyles = {
        backgroundImage: `url(${leftArrow})`,
        height: "80px",
        width: "47px",
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "24px",
        zIndex: 1,
        cursor: "pointer",
    }

    const rightArrowSyles = {
        backgroundImage: `url(${rightArrow})`,
        height: "80px",
        width: "47px",
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "24px",
        zIndex: 1,
        cursor: "pointer",
    }
    //Fin style CSS

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return(
        <div className='gallery'>
            <div style={leftArrowStyles} onClick={goToPrevious}></div>
            <div style={rightArrowSyles} onClick={goToNext}></div>
            <div style={slideStyles}></div>
            <p className='current-slide'>{currentIndex + 1}/{slides.length}</p>
        </div>
    );
}

export default Caroussel;