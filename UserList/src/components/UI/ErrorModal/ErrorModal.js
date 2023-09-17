import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';
import classes from './ErrorModal.module.css';

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm} />
    )
};

const ModalOverlay = props => {
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
};

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))};
        </React.Fragment>
    )
};

export default ErrorModal;