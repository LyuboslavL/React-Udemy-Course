import { useState } from "react";

import Header from "./components/layout/Header.jsx";
import AvailableMeals from "./components/meals/AvailableMeals.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log("clicked cart");
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <Header onShowCart={showCartHandler} />
      <AvailableMeals />
    </>
  );
}

export default App;
