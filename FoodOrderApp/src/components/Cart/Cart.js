import React from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
    const cartItems = [];

    return (
        <Modal onCancel={props.onCancel}>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$3.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCancel}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;