import React from 'react';
import { useState } from 'react';
import './DropDownButton.scss';
import arrow from '../../assets/images/arrow.png';



const DropDown = ({title ,content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="dropdown__container">
            <button className="dropdown" onClick={toggleDropdown}>
                {title}
                <img src={arrow} alt="arrow" className={`dropdown__icon ${isOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown__content ${isOpen ? 'open' : ''}`}>
                {content}  
            </div>
        </div>
    );
};

export default DropDown;