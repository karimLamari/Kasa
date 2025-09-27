import React, { useState } from 'react';
import './DropDownButton.scss';
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = ({ title, content }) => {



    return (
        <details className="dropdown__container">
            <summary className="dropdown">
                {title}
                <RiArrowDropDownLine className="dropdown__icon" />
            </summary>
            <div className="dropdown__content">
                {content}
            </div>
        </details>
    );
};

export default DropDown;
