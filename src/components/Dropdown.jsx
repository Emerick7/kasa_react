import '../styles/Dropdown.css';
import React, { useState } from 'react';
import downArrow from '../assets/down_arrow_dropdown.svg';
import upArrow from '../assets/up_arrow_dropdown.svg';

function Dropdown(props) {
    const dropdownContent = props.dropdownContent;
    const dropdownContainerStyles = props.dropdownContainerStyles;
    const dropdownFontSize = props.dropdownFontSize;

    const [currentState, setCurrentState] = useState(false);

    const openCloseDropdown = () => {
        const isClose = currentState === false;
        isClose ? setCurrentState(true) : setCurrentState(false);
    };

    let articleStyles;
    let arrowDropdown;

    if(currentState === true) {
        articleStyles = {display: "",};
        arrowDropdown = upArrow;
    } else {
        articleStyles = {display: "none",};
        arrowDropdown = downArrow;
    };

    return (
        <div className='dropdown-container' style={dropdownContainerStyles}>
            <div className='dropdown' onClick={openCloseDropdown}>
                <h4 style={dropdownFontSize}>{dropdownContent.h4}</h4>
                <img src={arrowDropdown}/>
            </div>
            <article className='dropdown-content' style={{...articleStyles, ...dropdownFontSize}}>
                {dropdownContent.article.map((string) => <p>{string}</p>)}
            </article>
        </div>
    );
}

export default Dropdown;