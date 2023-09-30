import React from 'react';

import mainImg from '../../assets/main-image.jpg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <img className={classes['main-image']} src={mainImg} alt='headerImg' />
        </header>
    )
};

export default Header;