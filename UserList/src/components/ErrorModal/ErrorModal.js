import React from 'react';

import Button from '../UI/Button/Button'

const ErrorModal = props => {
    return (
        <section className='modal-container'>
            <header>
                <h2>Error!</h2>
            </header>
            <div className='error-msg'>
                <p>{props.children}</p>
            </div>
            <footer className='modal-close'>
                <Button>Close</Button>
            </footer>
        </section>
    )
};

export default ErrorModal;