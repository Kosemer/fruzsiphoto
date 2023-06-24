/* A komponens iterál a "images" tömbön, és mindegyik képhez létrehoz egy div elemet, amelyben szerepel a kép és a hozzá tartozó szöveg. Mindegyik képre rákattintva a felhasználót átirányítja a "/galeria" oldalra, és az adott kép szűrési értékét (filter) állapotként átadja, amelyet később fel lehet használni a képgaléria szűrésére. */

import React from "react";
import classes from "./OptionalPhotoshoots.module.css";
import portre from "../../../Assets/OptionalPhotoShoots/image5.jpg";
import weddings from "../../../Assets/OptionalPhotoShoots/image7.jpg";
import sport from "../../../Assets/OptionalPhotoShoots/image12.jpg";
import family from "../../../Assets/OptionalPhotoShoots/image.jpg";
import event from "../../../Assets/OptionalPhotoShoots/image34.jpg";
import budoir from "../../../Assets/OptionalPhotoShoots/image1.jpg";

import { useNavigate } from "react-router-dom";

//A kezdőképernyőn az "Irány a galéria rész"

const OptionalPhotoshoots = () => {
  const navigate = useNavigate();

  const images = [
    {
      id: 1,
      src: portre,
      alt: "Image 1",
      text: "Portré fotózás",
      value: "portrait",
      filter: "portrait",
    },
    {
      id: 2,
      src: weddings,
      alt: "Image 2",
      text: "Esküvői fotózás",
      value: "wedding",
      filter: "wedding",
    },
    {
      id: 3,
      src: budoir,
      alt: "Image 3",
      text: "Boudoir fotózás",
      value: "budoir",
      filter: "budoir",
    },
    {
      id: 4,
      src: sport,
      alt: "Image 4",
      text: "Sport fotózás",
      value: "sport",
      filter: "sport",
    },
    {
      id: 5,
      src: family,
      alt: "Image 5",
      text: "Családi fotózás",
      value: "family",
      filter: "family",
    },
    {
      id: 6,
      src: event,
      alt: "Image 6",
      text: "Rendezvény fotózás",
      value: "event",
      filter: "event",
    },
  ];

  const onImageClickHandler = (image) => {
    console.log(image);

    navigate("/galeria", { state: { filter: image.filter } });
  };
  return (
    <div className={classes.container}>
      {images.map((image) => (
        <div
          key={image.id}
          className={classes.box}
          onClick={() => onImageClickHandler(image)}
        >
          <img src={image.src} alt={image.alt} />
          <div className={classes.text}>{image.text}</div>
        </div>
      ))}
    </div>
  );
};

export default OptionalPhotoshoots;
