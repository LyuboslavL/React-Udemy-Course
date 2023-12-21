import { useState } from "react";

import Header from "./components/Layout/Header.jsx";
import AvailableMeals from "./components/Meals/AvailableMeals.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartProvider from "./store/CartProvider.jsx";
import Checkout from "./components/UI/Checkout.jsx";
import SuccessfulOrder from "./components/UI/SuccessfulOrder.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);
  const [successfulOrderIsShown, setSuccessfulOrderIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideModalHandler = () => {
    setCartIsShown(false);
    setCheckoutIsShown(false);
    setSuccessfulOrderIsShown(false);
  };

  const checkoutHandler = () => {
    setCartIsShown(false);
    setCheckoutIsShown(true);
  };

  const orderHandler = () => {
    setCheckoutIsShown(false);
    setSuccessfulOrderIsShown(true);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCancel={hideModalHandler} onOrder={checkoutHandler} />
      )}
      {checkoutIsShown && <Checkout onCancel={hideModalHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
