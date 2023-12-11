import { useContext } from "react";

import classes from "./MealItem.module.css";

import Button from "../ui/Button.jsx";
import CartContext from "../../store/cart-context.jsx";

const MealItem = ({ id, name, image, description, price, actions }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      key: id,
      name: name,
      // amount: amount + 1,
      price: price,
    });

    console.log("clicked", cartCtx);
  };

  return (
    <li id={id}>
      <article>
        <div className={classes["meal-item"]}>
          <img src={`http://localhost:3000/${image}`}></img>
          <h3>{name}</h3>
          <div className={classes["meal-item-price"]}>${price}</div>
          <div className={classes["meal-item-description"]}>{description}</div>
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
