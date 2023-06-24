/* A ConfirmDeleteModal egy modális párbeszédablakot hoz létre, hogy megerősítést kérjen a felhasználótól egy kép törlése előtt.

A komponens logikájában az isOpen prop határozza meg, hogy a modális párbeszédablak látható-e. Ha nem, a komponens nem renderel semmit.

A modalRef useRef hook segítségével hoz létre egy referenciát a modális párbeszédablakhoz. Ezt azért használja, hogy a modális párbeszédablakon kívülre történő kattintás esetén is lehessen zárni a modált a handleClose függvényben.

A modális ablakban található egy szöveg, amely megkérdezi a felhasználót, hogy biztosan törölni akarja-e a képet, és két gomb található, egy a törlés megerősítésére (onDelete), és egy a modális ablak bezárására (onClose).

A komponens támogatja a sötét módot is az isDarkMode prop segítségével. Ha a sötét mód aktív, a darkModeClasses.modalContainer stílus osztályt használja, ellenkező esetben pedig a classes.modalContainer stílus osztályt. */


import React, { useRef } from "react";
import classes from "./ConfirmDeleteModal.module.css";
import darkModeClasses from "./DarkMode.module.css";

const ConfirmDeleteModal = ({ isOpen, onClose, onDelete, isDarkMode }) => {
  const modalRef = useRef();

  if (!isOpen) {
    return null;
  }

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} onClick={handleClose} className={classes.modalOverlay}>
      <div
        className={
          isDarkMode ? darkModeClasses.modalContainer : classes.modalContainer
        }
      >
        <p>Biztosan törölni szeretnéd ezt a képet?</p>
        <div className={classes.buttonContainer}>
          <button onClick={onDelete}>Igen</button>
          <button onClick={onClose}>Mégse</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
