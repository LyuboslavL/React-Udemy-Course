import { useContext } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal.jsx";
import Button from "../UI/Button.jsx";
import CartItem from "./CartItem.jsx";
import CartContext from "../../store/cart-context.jsx";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  // const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: amount + 1 });
  };

  return (
    <Modal onCancel={props.onCancel}>
      <div className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
              />
            );
          })}
        </ul>
        {/* <span className={classes["cart-total"]}>{totalAmount}</span> */}
      </div>
      <div>
        <Button className={classes["text-button"]} onClick={props.onCancel}>
          Close
        </Button>
        <Button onClick={props.onOrder}>Go to Checkout</Button>
      </div>
    </Modal>
  );
};

export default Cart;
