import { useState } from "react";

import Header from "./components/layout/Header.jsx";
import AvailableMeals from "./components/meals/AvailableMeals.jsx";
import Cart from "./components/cart/Cart.jsx";

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
      <Cart></Cart>
      <Header onShowCart={showCartHandler} />
      <AvailableMeals />
    </>
  );
}

export default App;
