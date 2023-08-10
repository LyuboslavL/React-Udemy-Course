import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setSelectedYear] = useState('2020');


    const selectYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredItems = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onSelectedYear={selectYearHandler} />
                <ExpensesList items={filteredItems} />
            </Card>
        </div>
    )
}

export default Expenses;