import { useContext } from "react";

import classes from "./MealItem.module.css";

import Button from "../UI/Button.jsx";
import CartContext from "../../store/cart-context.jsx";
import { currencyFormatter } from "../../util/formatter.js";

const MealItem = ({ meal }) => {
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
    <li className={classes["meal-item"]}>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>
        <div>
          <h3>{meal.name}</h3>
          <p className={classes["meal-item-price"]}>
            {currencyFormatter.format(meal.price)}
          </p>
          <p className={classes["meal-item-description"]}>{meal.description}</p>
        </div>
        <p className={classes["meal-item-actions"]}>
          <Button onClick={() => addToCartHandler()}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
