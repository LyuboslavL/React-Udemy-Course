import React from 'react';

import Button from '../Button/Button';
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    return (
        <section className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button>Close</Button>
            </footer>
        </section>
    )
};

export default ErrorModal;