import HeaderCartButton from "./HeaderCartButton.jsx";

import mainImg from "../../assets/logo.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header id={classes["main-header"]}>
        <div id={classes["title"]}>
          <h1>Your Tasty Place</h1>
          <img src={mainImg} alt="A restaurant logo" />
          <HeaderCartButton />
        </div>
      </header>
    </>
  );
};

export default Header;
