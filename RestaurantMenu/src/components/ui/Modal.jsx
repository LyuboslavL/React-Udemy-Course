import { Fragment } from "react";
import ReactDOM, { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.overlay} onClick={props.onCancel}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlayRoot = document.getElementById("inner");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        overlayRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayRoot
      )}
    </Fragment>
  );
};

export default Modal;
