import React, { useState } from 'react';

import './InvestmentInput.css';
// import Button from '../UI/Button/Button'


const InvestmentInput = props => {
    const [enteredCurrent, setEnteredCurrent] = useState('');
    const [enteredYearly, setEnteredYearly] = useState('');
    const [enteredInterest, setEnteredInterest] = useState('');
    const [enteredDuration, setEnteredDuration] = useState('');

    const currentSavingsHandler = (event) => setEnteredCurrent(event.target.value);
    const yearlySavingsHandler = (event) => setEnteredYearly(event.target.value);
    const expectedInterestHandler = (event) => setEnteredInterest(event.target.value);
    const investmentDurationHandler = (event) => setEnteredDuration(event.target.value);

    const formSubmitHandler = event => {
        event.preventDefault();

        const investmentData = {
            currentSavings: enteredCurrent,
            yearlySavings: enteredYearly,
            expectedInterest: enteredInterest,
            investmentDuration: enteredDuration
        };

        props.onCalculate(investmentData);
    };

    const resetHandler = () => {
        setEnteredCurrent('');
        setEnteredYearly('');
        setEnteredInterest('');
        setEnteredDuration('');
        props.onCalculate(null)
    }

    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={currentSavingsHandler} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={yearlySavingsHandler} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={expectedInterestHandler} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={investmentDurationHandler} />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button" >
                    Calculate
                </button>
            </p>
        </form>
    )
};

export default InvestmentInput;