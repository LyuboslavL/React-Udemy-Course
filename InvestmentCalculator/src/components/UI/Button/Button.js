import React from 'react';

import './Button.css';

const Button = props => {
    <p className="actions">
        <button type="reset" className="buttonAlt" onClick={props.onEditClick}>
            Reset
        </button>
        <button type="submit" className="button" onClick={props.onCalculateClick}>
            Calculate
        </button>
    </p>
};

export default Button;