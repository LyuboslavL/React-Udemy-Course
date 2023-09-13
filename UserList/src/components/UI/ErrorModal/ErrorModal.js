import React from 'react';

import Button from '../Button/Button';
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <section className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Close</Button>
                </footer>
            </section>
        </div>
    )
};

export default ErrorModal;