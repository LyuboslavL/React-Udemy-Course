import React from 'react';

import Button from '../UI/Button/Button'

const ErrorModal = props => {
    return (
        <section>
            <header>
                <h2>Error!</h2>
            </header>
            <div>
                <p>{props.children}</p>
            </div>
            <footer>
                <Button>Close</Button>
            </footer>
        </section>
    )
};

export default ErrorModal;