import React, { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = Number(enteredAmount);

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 0 || enteredAmountNumber > 20) {
            setAmountIsValid(false);
            return;
        };

        props.onAddToCart(enteredAmountNumber);

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '20',
                    step: '1'
                }} />
            <button>Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-20).</p>}
        </form>
    )
};

export default MealItemForm;