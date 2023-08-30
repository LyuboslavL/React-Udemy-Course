import InvestmentInput from './components/InvestmentInput/InvestmentInput';
import InvestmentListResults from './components/InvestmentListResults/InvestmentListResults';
import SiteHeader from './components/SiteHeader/SiteHeader';

function App() {
  let initialInput = [];

  const calculateResult = (userInput) => {
    initialInput.push(userInput);
    console.log(initialInput);
  }

  return (
    <div>
      <SiteHeader />
      <InvestmentInput result={calculateResult} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentListResults inputToCalculate={initialInput} />
    </div>
  );
}

export default App;
