import InvestmentInput from './components/InvestmentInput/InvestmentInput';
import InvestmentListResults from './components/InvestmentListResults/InvestmentListResults';
import SiteHeader from './components/SiteHeader/SiteHeader';

function App() {
  const calculateHandler = (userInput) => {
    console.log(userInput)
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings'];
    const yearlyContribution = +userInput['yearlySavings'];
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['investmentDuration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
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

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentListResults />
    </div>
  );
}


export default App;
