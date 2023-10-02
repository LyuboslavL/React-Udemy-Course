import React from 'react';

import classes from './AvailableMeals.module.css';

const AvailableMeals = props => {
    return (
        <ul className={classes.meals}>
            <li>
                <h3>Sushi</h3>
                <p>Stupid meal</p>
            </li>
        </ul>
    )
};

export default AvailableMeals;