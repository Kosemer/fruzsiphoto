/* A ResizeImage komponens egy képfájl átméretezési funkciót biztosít. A komponens egy imageFile paramétert kap, ami a módosítandó képfájl, és két funkciót: az setImageFile-t, ami beállítja a módosított képfájlt, és az onResizeSuccess-t, ami visszahívódik, amikor az átméretezés sikeresen megtörtént.

A képfájl átméretezését a resizeImage függvény végzi. Egy új Image objektumot hoz létre az eredeti képfájl URL-jével, majd a kép betöltődése után létrehoz egy új canvas elemet, és a kép átméretezett változatát rajzolja rá. Az átméretezett képet JPEG formátumban menti el, és beállítja a módosított képfájlt.

A komponensben van egy gomb, amivel elindítható az átméretezés, valamint egy szövegrész, amely magyarázza, miért fontos az optimalizálás. A gomb akkor lesz kattintható, ha van képfájl és azt még nem méretezték át. */

import React, {  useState, useContext } from "react";
import classes from "./ResizeImage.module.css";
import CartContext from "../../Components/Store/cart-context";

const ResizeImage = ({
  imageFile,
  setImageFile,
  onResizeSuccess,
  scale = 0.25,
  selectedFile,
}) => {
  const cartCtx = useContext(CartContext);
  const [buttonClicked, setButtonClicked] = useState(false);
  console.log(selectedFile);
  const resizeImage = () => {
    setButtonClicked(true);
    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          const resizedImageFile = new File([blob], imageFile.name, {
            type: "image/jpeg",
          });
          setImageFile(resizedImageFile);
          onResizeSuccess(resizedImageFile.size);
        },
        "image/jpeg",
        1
      );
    };
  };

  return (
    <div className={cartCtx.isOpenResize ? classes.container : classes.containerClosed}>
      <h3>Kép otimalizálása</h3>
      <p className={classes.description}>
        A weboldalon lévő képek optimalizáltak, ami azt jelenti, hogy az eredeti
        méretükhöz képest 75%-al csökkentve vannak. Ez jelentős méretbeni
        különbséget jelent, ami a minőségben nem vehető észre.
        <strong>
          <br></br>Javasolt a képek optimalizálása feltöltés előtt, amennyiben
          nagyobb méretűek, hogy a weboldal betöltési ideje rövid legyen.
        </strong>
      </p>
      <div className={classes.resizeButtonContainer}>
        <button
          type="button"
          onClick={resizeImage}
          disabled={!imageFile || imageFile.resized}
          className={classes.resizeButton}
        >
          Kép átméretezése {scale * 100}%-ra
        </button>
      </div>
      {!selectedFile && buttonClicked && (
        <p className={classes.errorMessage}>Válassz ki egy képet</p>
      )}
    </div>
  );
};

export default ResizeImage;
