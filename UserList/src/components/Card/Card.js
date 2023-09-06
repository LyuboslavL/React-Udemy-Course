import React from 'react';

const Card = (props) => {
    return (
        <li className='user-card'>
            {props.children}
        </li>
    );
};

export default Card;