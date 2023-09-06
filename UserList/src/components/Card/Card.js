import React from 'react';

const Card = (props) => {
    return (
        <li>
            {props.children}
        </li>
    );
};

export default Card;