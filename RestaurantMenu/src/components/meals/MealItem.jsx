import classes from "./MealItem.module.css";

const MealItem = ({ name, image, description, price, actions }) => {
  return (
    <li>
      <article>
        <div className={classes["meal-item"]}>
          <img src={`http://localhost:3000/${image}`}></img>
          <h3>{name}</h3>
          <div className={classes["meal-item-price"]}>${price}</div>
          <div className={classes["meal-item-description"]}>{description}</div>
          <div className={classes["meal-item-actions"]}>
            <button className={classes.button}>Add to Cart</button>
          </div>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
