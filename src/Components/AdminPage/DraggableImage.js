/* Húzható képet jelenít meg.

A draggable attribútummal beállítja, hogy a kép húzható legyen. Az onDragStart eseménykezelőben meghatározza, hogy mi történjen, amikor a húzás elindul: itt az imageIndex adatot rendeli hozzá a dataTransfer objektumhoz, amely lehetővé teszi, hogy az indexet használhassuk a drag-and-drop műveletek során.

A kép forrását (src) az image prop alapján állítja be, ami egy URL utolsó része, és a kép helyét a szerveren jelöli. */

import classes from "./DraggableImage.module.css";
import CartContext from "../../Components/Store/cart-context";
import React, { useState, useEffect, useContext } from "react";
import DeleteIcon from "../../Assets/DeleteIcon.svg";
import darkModeClasses from "./DarkMode.module.css";

const DraggableImage = ({ index, image, handleImageClick }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("imageIndex", index);
  };

  const cartCtx = useContext(CartContext);

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    cartCtx.setImageToDelete(image);
    cartCtx.setIsModalOpen(true);
  };

  return (
    <div className={classes.imageContainer} onClick={handleDeleteClick}>
      <img
        draggable
        onDragStart={handleDragStart}
        src={`/assets/${image}`}
        alt=""
        className={classes.draggableImage}
        onClick={() => handleImageClick(image)}
      />
      <div className={classes.overlay}>
        {/*<div className={classes.x}>X</div>*/}
        <img src={DeleteIcon}></img>
      </div>
    </div>
  );
};

export default DraggableImage;
