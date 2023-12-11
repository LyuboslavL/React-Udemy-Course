import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <p>
        {props.name} - {props.amount} x {price}
      </p>
      <div className={classes.action}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
