import React from "react";
import { Modal, Button } from "react-bootstrap";

const OptimizeImageModal = ({ show, onClose, onOptimize }) => {
  const handleOptimizeClick = () => {
    onOptimize();
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Kép optimalizálása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        A kép mérete kisebb, mint 6 MB, nincs szükség optimalizálásra.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Mégse
        </Button>
        <Button variant="primary" onClick={handleOptimizeClick}>
          Optimalizálás
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OptimizeImageModal;
