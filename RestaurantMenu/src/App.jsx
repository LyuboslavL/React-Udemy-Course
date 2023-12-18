import { useState } from "react";

import Header from "./components/Layout/Header.jsx";
import AvailableMeals from "./components/Meals/AvailableMeals.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartProvider from "./store/CartProvider.jsx";
import Checkout from "./components/UI/Checkout.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

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
