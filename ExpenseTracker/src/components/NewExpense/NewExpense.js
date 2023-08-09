import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    function submittedFormHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddedExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmittedForm={submittedFormHandler} />
        </div>
    )
}

export default NewExpense;