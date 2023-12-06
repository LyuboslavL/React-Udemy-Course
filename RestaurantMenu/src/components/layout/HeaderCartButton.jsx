import { useState } from "react";

import CartIcon from "../cart/CartIcon.jsx";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* <span className={classes.badge}></span> */}
    </button>
  );
};

export default HeaderCartButton;
