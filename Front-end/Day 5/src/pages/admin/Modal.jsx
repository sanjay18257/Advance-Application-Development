import React from "react";
import './admin.css'
const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal">
     
        <span className="close" onClick={closeModal}>&times;</span>
        {children}
    </div>
  );
};

export default Modal;
