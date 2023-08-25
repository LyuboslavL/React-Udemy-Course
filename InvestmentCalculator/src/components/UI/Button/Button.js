import React from 'react';

import './Button.css';

const Button = props => {
        <p className="actions">
                <button type={props.type} className='button' onClick={props.onClick}>
                        {props.children}
                </button>
        </p>
};

export default Button;