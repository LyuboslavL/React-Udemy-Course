import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)
 
    function submittedFormHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddedExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => setIsEditing(false); 

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSubmittedForm={submittedFormHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;