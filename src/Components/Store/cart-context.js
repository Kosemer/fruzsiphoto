/* Ez a komponens létrehoz egy kontextust (CartContext), ami lehetővé teszi a különböző értékek átadását a komponensfán belül, a szülő-gyermek relációk közvetlen beavatkozása nélkül.

cssMobile: egy logikai érték, amely arra szolgál, hogy tárolja, mobil nézetben van-e a felhasználó. Az alapértelmezett érték true.

photoPackage: a kiválasztott fotócsomag nevét tárolja, alapértelmezett érték --Választás--.

selectedFilter: tárolja a kiválasztott szűrő nevét, alapértelmezett értéke portrait.

lastFilter: tárolja az utoljára használt szűrő nevét, alapértelmezett értéke null.
*/

import React from "react";

const CartContext = React.createContext({
  cssMobile: true,
  setCssMobile: () => {},
  photoPackage: "--Választás--",
  setphotoPackage: () => {},
  setSelectedPhotos: () => {},
  selectedFilter: "portrait",
  setSelectedFilter: () => {},
  lastFilter: null,
  setLastFilter: () => {},
  selectedFile: null,
  setSelectedFile: () => {},
  selectedFolder: "",
  setSelectedFolder: () => {},
  folderImages: [],
  setFolderImages: () => {},
  inputValue: "",
  setInputValue: () => {},
  imagePreview: null,
  setImagePreview: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  imageToDelete: null,
  setImageToDelete: () => {},
  fileError: null,
  setFileError: () => {},
  folderError: null,
  setFolderError: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {},
  imageSize: null,
  setImageSize: () => {},
  resizeSuccess: false,
  setResizeSuccess: () => {},
  imageResized: false,
  setImageResized: () => {},
  resetButton: () => {},
  resetImageUploader: () => {},
  showWarningImageSize: false,
  setShowWarningImageSize: () => {},
  setIsMobile: () => {},
  isMobile: false,
});

export default CartContext;
