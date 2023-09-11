import React from 'react';

import './Card.css'

const Card = (props) => {
    return (
        <li>
            {props.children}
        </li>
    );
};

export default Card;