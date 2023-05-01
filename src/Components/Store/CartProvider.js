import { useState } from "react";
import CartContext from "./cart-context";
import { photos1 } from "../PhotoGallery/Photos/Budoir";
import { photos2 } from "../PhotoGallery/Photos/DavidBetti";
import { photos3 } from "../PhotoGallery/Photos/FtcMol";
import { photos4 } from "../PhotoGallery/Photos/FtcMtk";
import { photos5 } from "../PhotoGallery/Photos/FtcPuskas";
import { photos6 } from "../PhotoGallery/Photos/KatiKristofLena";
import { photos7 } from "../PhotoGallery/Photos/LauraBence";
import { photos8 } from "../PhotoGallery/Photos/Ovi";
import { photos9 } from "../PhotoGallery/Photos/PeterCsaladKaracsony";
import { photos10 } from "../PhotoGallery/Photos/PeterEsCsaladja";
import { photos11 } from "../PhotoGallery/Photos/Seiken";
import { photos12 } from "../PhotoGallery/Photos/Sese";
import { photos13 } from "../PhotoGallery/Photos/PeterEsVikiEskuvo";

function CartProvider(props) {

  // Galériában a képek megjelenitése.
  const photos = {
    all: [...photos1, ...photos2, ...photos3, ...photos4, ...photos5, ...photos6, ...photos7, ...photos8, ...photos9, ...photos10],
    portrait: [...photos2],
    wedding: [...photos7, ...photos13],
    budoir: [...photos1],
    sport: [...photos3, ...photos4, ...photos5, ...photos11, ...photos12],
    family: [...photos6, ...photos9, ...photos10],
    event: [...photos8]
  };

  //Mobilnézetben nem tölt be semmilyen képet kezdésnek
  const isMobileView = () => {
    return window.innerWidth <= 768;
  };
  
  const [selectedPhotos, setSelectedPhotos] = useState(photos.portrait);
  //const [selectedFilter, setSelectedFilter] = useState("portrait");
  const [selectedFilter, setSelectedFilter] = useState(
    isMobileView() ? null : "portrait"
  );
  

  const [cssMobile, setCssMobile] = useState(true);
  const [photoPackage, setphotoPackage] = useState("--Választás--");
  
  const cartContext = {
    cssMobile: cssMobile,
    setCssMobile: setCssMobile,
    photoPackage: photoPackage,
    setphotoPackage: setphotoPackage,
    selectedPhotos: selectedPhotos,
    setSelectedPhotos: setSelectedPhotos,
    selectedFilter: selectedFilter,
    setSelectedFilter: setSelectedFilter,
    photos: photos
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;