import React from 'react';

import './InvestmentListResults.css';

export default function InvestmentListResults(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(el => {
          return (
            <tr>
              <td>{el.year}</td>
              <td>{el.savingsEndOfYear}</td>
              <td>{el.yearlyInterest}</td>
              <td>{el.yearlyContribution}</td>
            </tr>)
        })}
      </tbody>
    </table>
  )
};