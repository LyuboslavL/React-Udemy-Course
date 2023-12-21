import { useContext, useState } from "react";

import classes from "./Checkout.module.css";

import CartContext from "../../store/cart-context.jsx";
// import CartProvider from "../../store/CartProvider.jsx";
import Modal from "./Modal.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import SuccessfulOrder from "./SuccessfulOrder.jsx";
import { currencyFormatter } from "../../util/formatter.js";
import CartProvider from "../../store/CartProvider.jsx";

function Checkout(props) {
  const [orderIsSuccessful, setOrderIsSuccessful] = useState(false);

  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const customerData = Object.fromEntries(formData.entries());

    /* ------- GATHERING INFO/DATA ONE AT A TIME ---------
    const fullName = formData.get("name");
    const email = formData.get("email");
    const street = formData.get("street");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");
    */

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });

    setOrderIsSuccessful(true);
    event.target.reset();
    cartCtx.
  }

  return (
    <>
      {!orderIsSuccessful && (
        <Modal onCancel={props.onCancel}>
          <form className={classes.checkout} onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input label="Full name" type="text" id="name" />
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
      )}
      {orderIsSuccessful && (
        <SuccessfulOrder onCancel={props.onCancel}></SuccessfulOrder>
      )}
    </>
  );
}

export default Checkout;
