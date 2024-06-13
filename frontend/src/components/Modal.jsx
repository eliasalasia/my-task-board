import React from 'react';

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <div className={`modal-overlay ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>cerrar</button>
        <div className="modal-buttons">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
