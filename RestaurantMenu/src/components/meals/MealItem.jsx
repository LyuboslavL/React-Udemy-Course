import classes from "./MealItem.module.css";

const MealItem = ({ name, image, description, price, actions }) => {
  return (
    <li>
      <div className={classes["meal-item"]}>
        <article>
          <img src={`http://localhost:3000/${image}`}></img>
          <h3>{name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>${price}</div>
          <div className={classes.actions}>Actions</div>
        </article>
      </div>
    </li>
  );
};

export default MealItem;
