import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <ErrorBoundary>
          <Counter key={chosenCount} initialCount={chosenCount} />
          <Counter initialCount={0} />
        </ErrorBoundary>
      </main>
    </>
  );
}

export default App;
