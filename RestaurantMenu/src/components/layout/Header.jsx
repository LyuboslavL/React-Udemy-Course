import { useContext } from "react";

import HeaderCartButton from "./HeaderCartButton.jsx";
import mainImg from "../../assets/logo.jpg";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context.jsx";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const itemsQuantity = cartCtx.items.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );

  return (
    <>
      <header id={classes["main-header"]}>
        <div id={classes["title"]}>
          <h1>Your Tasty Place</h1>
          <img src={mainImg} alt="A restaurant logo" />
          <HeaderCartButton
            onClick={props.onShowCart}
            quantity={itemsQuantity}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
