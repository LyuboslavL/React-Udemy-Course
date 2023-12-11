import { useContext } from "react";

import classes from "./MealItem.module.css";

import Button from "../ui/Button.jsx";
import CartContext from "../../store/cart-context.jsx";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(props);

  const addToCartHandler = (event) => {
    const item = event.target.parentNode.parentNode;
    console.log(item);

    cartCtx.addItem({
      id: item.id,
      name: item.name,
      // amount: amount,
      price: item.price,
    });

    // console.log(cartCtx);
  };

  return (
    <li>
      <article>
        <div className={classes["meal-item"]} id={props.id}>
          <img src={`http://localhost:3000/${props.image}`}></img>
          <h3>{props.name}</h3>
          <div className={classes["meal-item-price"]}>${props.price}</div>
          <div className={classes["meal-item-description"]}>
            {props.description}
          </div>
          <div className={classes["meal-item-actions"]}>
            <Button onClick={addToCartHandler} className="-actions">
              Add to Cart
            </Button>
          </div>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
