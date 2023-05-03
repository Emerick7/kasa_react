import '../styles/Caroussel.css';
import React, { useState } from 'react';
import leftArrow from '../assets/left_arrow_gallery.svg';
import rightArrow from '../assets/right_arrow_gallery.svg';

function Caroussel(props) {
    const slides = props.slides;

    const [currentIndex, setCurrentIndex] = useState(0);

    //Style CSS
    let slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "25px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex]})`
    };

    let leftArrowStyles = {
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

    let rightArrowSyles = {
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

    let mobileMediaQuery = window.matchMedia("(max-width: 480px)");

    if(mobileMediaQuery.matches) {
        leftArrowStyles = {
            backgroundImage: `url(${leftArrow})`,
            height: "20px",
            width: "12px",
            backgroundSize: "contain",
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            left: "6px",
            zIndex: 1,
            cursor: "pointer",
        };

        rightArrowSyles = {
            backgroundImage: `url(${rightArrow})`,
            height: "20px",
            width: "12px",
            backgroundSize: "contain",
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            right: "6px",
            zIndex: 1,
            cursor: "pointer",
        };
    }
    //Fin style CSS
    let currentSlideStyle;

    if(slides.length < 2) {
        leftArrowStyles = {display: "none"};
        rightArrowSyles = {display: "none"};
        currentSlideStyle = {display: "none"};
    }

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
            <p className='current-slide' style={currentSlideStyle}>{currentIndex + 1}/{slides.length}</p>
        </div>
    );
}

export default Caroussel;