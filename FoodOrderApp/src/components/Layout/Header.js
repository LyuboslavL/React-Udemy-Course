import React from 'react';

import HeaderCartButton from './HeaderCartButton';

import mainImg from '../../assets/main-image.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>finger lickin' good...</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div>
                <img className={classes['main-image']} src={mainImg} alt='A banner of a restaurant with healthy meals' />
            </div>
        </>
    )
};

export default Header;