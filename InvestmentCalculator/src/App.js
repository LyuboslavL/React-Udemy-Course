import logo from './assets/investment-calculator-logo.png';

import InvestmentInput from './components/InvestmentInput/InvestmentInput';
import InvestmentListResults from './components/InvestmentListResults/InvestmentListResults';

function App() {
  const calculateResult = (userInput) => {
    console.log(userInput);
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentInput result={calculateResult} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentListResults />
    </div>
  );
}

export default App;
