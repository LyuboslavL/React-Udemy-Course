import InvestmentInput from './components/InvestmentInput/InvestmentInput';
import InvestmentListResults from './components/InvestmentListResults/InvestmentListResults';
import SiteHeader from './components/SiteHeader/SiteHeader';

function App() {
  const yearlyData = []; // per-year results
  const calculateHandler = (userInput) => {

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

    return yearlyData;
  }

  return (
    <div>
      <SiteHeader />
      <InvestmentInput onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentListResults result={yearlyData} />
    </div>
  );
}


export default App;
