import classes from "./CartItem.module.css";
import { currencyFormatter } from "../../util/formatter";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <p>
        {props.name} - {props.quantity} x{" "}
        {currencyFormatter.format(props.price)}
      </p>
      <div className={classes.action}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
