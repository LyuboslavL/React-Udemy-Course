import React from 'react';

import Header from './components/Layout/Header';
import MealsSummary from './components/Layout/MealsSummary';
import AvailableMeals from './components/Layout/AvailableMeals';

function App() {

  return (
    <>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
