import { useState } from "react";

import Header from "./components/layout/Header.jsx";
import AvailableMeals from "./components/meals/AvailableMeals.jsx";
import Cart from "./components/cart/Cart.jsx";
import CartProvider from "./store/CartProvider.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCancel={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
