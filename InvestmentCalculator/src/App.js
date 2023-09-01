import React, { useState } from 'react'

import InvestmentInput from './components/InvestmentInput/InvestmentInput';
import InvestmentListResults from './components/InvestmentListResults/InvestmentListResults';
import SiteHeader from './components/SiteHeader/SiteHeader';

function App() {
  const [userInput, setResult] = useState(null);


  const calculateHandler = (userInput) => {
    setResult(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput['currentSavings'];
    const yearlyContribution = +userInput['yearlySavings'];
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['investmentDuration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <SiteHeader />
      <InvestmentInput onCalculate={calculateHandler} />

      {!userInput && <p>No investment calculated yet.</p>}
      {userInput && <InvestmentListResults data={yearlyData} initialInvestment={userInput['currentSavings']} />}
    </div>
  );
}


export default App;
