import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

function SuccessfulOrder(props) {
  return (
    <Modal onCancel={props.onCancel}>
      <h2>Your order is on it's way</h2>
      <p>Sit tight. We will be right at your door in no time!</p>
      <p>
        <Button onClick={props.onCancel}>Menu</Button>
      </p>
    </Modal>
  );
}

export default SuccessfulOrder;
