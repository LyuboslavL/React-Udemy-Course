import React from 'react';

import logo from '../../assets/investment-calculator-logo.png';
import './SiteHeader.css';

const SiteHeader = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
};

export default SiteHeader;
