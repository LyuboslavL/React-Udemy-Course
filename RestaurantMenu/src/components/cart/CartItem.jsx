import classes from "./CartItem.module.css";
import { currencyFormatter } from "../../util/formatter";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <p>
        {props.name} - {props.quantity} x{" "}
        {currencyFormatter.format(props.price)}
      </p>
      <p className={classes["cart-item-actions"]}>
        <button onClick={props.onRemove}>-</button>
        <span>{props.quantity}</span>
        <button onClick={props.onAdd}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
