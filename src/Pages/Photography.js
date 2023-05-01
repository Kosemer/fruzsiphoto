import PhotoGallery from "../Components/PhotoGallery/PhotoGallery";
import classes from "./Photography.module.css";
import { useContext, useEffect } from "react";
import CartContext from "../Components/Store/cart-context";
import AccordionImage from "../Components/AccordionImage";

function Photography() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartCtx = useContext(CartContext);


  const handleAllClick = () => {
    cartCtx.setSelectedPhotos(cartCtx.photos.all);
    cartCtx.setSelectedFilter("all");
  };

  const handlePortraitClick = () => {
    cartCtx.setSelectedPhotos(cartCtx.photos.portrait); // portré fotók betöltése
    cartCtx.setSelectedFilter("portrait");
  };
  const handleWeddingClick = () => {
    cartCtx.setSelectedPhotos(cartCtx.photos.wedding); // esküvői fotók betöltése
    cartCtx.setSelectedFilter("wedding");
  };
  const handleBudoirClick = () => {
    cartCtx.setSelectedPhotos(cartCtx.photos.budoir); // budoir fotók betöltése
    cartCtx.setSelectedFilter("budoir");
  };
  const handleSportClick = () => {
    cartCtx.setSelectedPhotos(cartCtx.photos.sport); // sport fotók betöltése
    cartCtx.setSelectedFilter("sport");
  };
  const handleFamiyClick = () => {
    cartCtx.setSelectedPhotos(cartCtx.photos.family); // családi fotók betöltése
    cartCtx.setSelectedFilter("family");
  };
  const handleEventClick = () => {
    cartCtx.setSelectedPhotos(cartCtx.photos.event); // rendezvény fotók betöltése
    cartCtx.setSelectedFilter("event");
  };
  return (
    <div className={classes.conatiner}>
      <h2 className={classes.photoTitle}>Válogass a témakörök között!</h2>
      <hr className={classes.underline}></hr>
      <div className={classes.photoFilter}>

        <h2 onClick={handleAllClick}data-selected={cartCtx.selectedFilter === "all"}>Összes</h2>
        <h2 onClick={handlePortraitClick}data-selected={cartCtx.selectedFilter === "portrait"}>Portré</h2>
        <h2 onClick={handleWeddingClick}data-selected={cartCtx.selectedFilter === "wedding"}>Esküvői</h2>
        <h2 onClick={handleBudoirClick}data-selected={cartCtx.selectedFilter === "budoir"}>Boudoir</h2>
        <h2 onClick={handleSportClick}data-selected={cartCtx.selectedFilter === "sport"}>Sport</h2>
        <h2 onClick={handleFamiyClick}data-selected={cartCtx.selectedFilter === "family"}>Családi</h2>
        <h2 onClick={handleEventClick}data-selected={cartCtx.selectedFilter === "event"}>Rendezvény</h2>
      </div>
      <div className={classes.PhotoGallery}>
      <PhotoGallery images={cartCtx.selectedPhotos}></PhotoGallery>
      </div>
      <div className={classes.AccordionImage}>
      <AccordionImage></AccordionImage>
      </div>
    </div>
  );
}

export default Photography;
