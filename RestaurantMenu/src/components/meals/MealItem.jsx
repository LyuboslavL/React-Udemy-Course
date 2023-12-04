import classes from "./MealItem.module.css";

const MealItem = ({ props }) => {
  return (
    <li>
      <div className={classes["meal-item"]}>
        <article>
          <img src={`http://localhost:3000/${props.image}`}></img>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
          <div className={classes.actions}>Actions</div>
        </article>
      </div>
    </li>
  );
};

export default MealItem;
