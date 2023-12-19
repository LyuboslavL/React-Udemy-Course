import { useContext } from "react";

import CartContext from "../../store/cart-context.jsx";
import Modal from "./Modal.jsx";
import Input from "./Input.jsx";
import { currencyFormatter } from "../../util/formatter.js";
import classes from "./Input.module.css";
import Button from "./Button.jsx";

function Checkout(props) {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <Modal onCancel={props.onCancel}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full name" type="text" id="full-name" />
        <Input label="Email" type="text" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className={classes["control-row"]}>
          <Input label="Postal code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className={classes["modal-actions"]}>
          <Button type="button" textOnly onClick={props.onCancel}>
            Close
          </Button>
          <Button>Submit order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
