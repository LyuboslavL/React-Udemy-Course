import classes from "./Cart.module.css";

import Modal from "../ui/Modal.jsx";
import Button from "../ui/Button.jsx";

const Cart = (props) => {
  return (
    <Modal onCancel={props.onCancel}>
      <div className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          <li className={classes["cart-item"]}>Food 1</li>
          <li className={classes["cart-item"]}>Food 2</li>
        </ul>
        <span className={classes["cart-total"]}>Total Amount</span>
      </div>
      <div>
        <Button onClick={props.onCancel}>Close</Button>
        <Button onClick={props.onOrder}>Go to Checkout</Button>
      </div>
    </Modal>
  );
};

export default Cart;
