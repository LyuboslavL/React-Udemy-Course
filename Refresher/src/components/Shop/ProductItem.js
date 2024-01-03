import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, author, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{author}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
