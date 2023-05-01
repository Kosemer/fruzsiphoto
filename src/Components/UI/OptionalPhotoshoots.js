import React from "react";
import classes from "./OptionalPhotoshoots.module.css";
import portre from '../../Assets/DavidBetti/image5.jpg';
import weddings from '../../Assets/LauraBence/image7.jpg';
import sport from '../../Assets/FtcMol/image12.jpg';
import family from '../../Assets/KatiKristofLena/image5.jpg';
import event from '../../Assets/Ovi/image34.jpg';
import budoir from '../../Assets/Budoir/image1.jpg';
import { useContext } from "react";
import CartContext from "../Store/cart-context";
import { useNavigate } from 'react-router-dom';

//A kezdőképernyőn az "Irány a galéria rész"   

const OptionalPhotoshoots = () => {

  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const images = [
    {
      id: 1,
      src: portre,
      alt: "Image 1",
      text: "Portré fotózás",
      value: cartCtx.photos.portrait,
      filter: "portrait"
    },
    {
      id: 2,
      src: weddings,
      alt: "Image 2",
      text: "Esküvői fotózás",
      value: cartCtx.photos.wedding,
      filter: "wedding"
    },
    {
      id: 3,
      src: budoir,
      alt: "Image 3",
      text: "Boudoir fotózás",
      value: cartCtx.photos.budoir,
      filter: "budoir"
    },
    {
      id: 4,
      src: sport,
      alt: "Image 4",
      text: "Sport fotózás",
      value: cartCtx.photos.sport,
      filter: "sport"
    },
    {
      id: 5,
      src: family,
      alt: "Image 5",
      text: "Családi fotózás",
      value: cartCtx.photos.family,
      filter: "family"
    },
    {
      id: 6,
      src: event,
      alt: "Image 6",
      text: "Rendezvény fotózás",
      value: cartCtx.photos.event,
      filter: "event"
    },
  ];

  const onImageClickHandler = (image) => {
    cartCtx.setSelectedPhotos(image.value);
    cartCtx.setSelectedFilter(image.filter);
    navigate('/galeria');
  };
  return (
    <div className={classes.container} >
      {images.map((image) => (
        <div key={image.id} className={classes.box} onClick={() => onImageClickHandler(image)}>
          <img src={image.src} alt={image.alt} />
          <div className={classes.text}>{image.text}</div>
        </div>
      ))}
    </div>
  );
};

export default OptionalPhotoshoots;
