import React from 'react';

import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = [];

    return (
        <div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$3.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
};

export default Cart;