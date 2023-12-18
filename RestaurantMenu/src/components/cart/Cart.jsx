import { useContext } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal.jsx";
import Button from "../UI/Button.jsx";
import CartItem from "./CartItem.jsx";
import CartContext from "../../store/cart-context.jsx";
import { currencyFormatter } from "../../util/formatter.js";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: item.quantity + 1 });
  };

  return (
    <Modal onCancel={props.onCancel}>
      <div className={classes.cart}>
        <h2>Your Cart</h2>
        {cartCtx.items.length > 0 ? (
          <>
            <ul>
              {cartCtx.items.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                  />
                );
              })}
            </ul>
            <p className={classes["cart-total"]}>
              {currencyFormatter.format(cartTotal)}
            </p>
            <p className={classes["text-button"]}>
              <Button textOnly onClick={props.onCancel}>
                Close
              </Button>
              {cartCtx.items.length > 0 && (
                <Button onClick={props.onOrder}>Go to Checkout</Button>
              )}
            </p>
          </>
        ) : (
          <>
            <p>No items in your cart yet. Why don't you add some?</p>
            <p className={classes["text-button"]}>
              <Button textOnly onClick={props.onCancel}>
                Menu
              </Button>
            </p>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
