import classes from "./SuccessfulOrder.module.css";

import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

function SuccessfulOrder(props) {
  return (
    <Modal onCancel={props.onCancel}>
      <div className={classes.order}>
        <h2>Your order is on it's way &#129303;</h2>
        <p>Sit tight. We will be right at your door in no time &#128336;</p>
        <p>
          <Button onClick={props.onCancel}>Menu</Button>
        </p>
      </div>
    </Modal>
  );
}

export default SuccessfulOrder;
