import React from "react";
import "./modal.styles.scss";

const Modal = ({ active, closeModal, children }) => {
  if (active === false) {
    return null;
  }
  return (
    <div className={`modal `}>
      <div className="content">
        <button className="close-button" type="button" onClick={closeModal}>
          X
        </button>
        <div className="children">{children}</div>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Modal;
