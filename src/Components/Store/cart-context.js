import React from "react";
import { photos2 } from "../PhotoGallery/Photos/DavidBetti";

const portrait = [
  ...photos2,
];

const CartContext = React.createContext({
  cssMobile: true,
  setCssMobile: () => {},
  photoPackage: '--Választás--',
  setphotoPackage: () => {},
  selectedPhotos: portrait,
  setSelectedPhotos: () => {},
  selectedFilter: "portrait",
  setSelectedFilter: () => {},
});

export default CartContext;
