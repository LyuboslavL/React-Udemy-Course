import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

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
                {filteredItems.map(item => {
                    return <ExpenseItem
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        amount={item.amount}
                    />
                })}
            </Card>
        </div>
    )
}

export default Expenses;