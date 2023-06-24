/* Ez a komponens lehetővé teszi, hogy az állapotokat és funkciókat a CartContext-en keresztül bármely alárendelt komponens használhassa. Ezáltal a CartProvider gyerekkomponensei hozzáférnek és módosíthatják ezeket az állapotokat, anélkül hogy közvetlenül kommunikálniuk kellene egymással. */

import { useState } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  //Mobilnézetben nem tölt be semmilyen képet kezdésnek
  const isMobileView = () => {
    return window.innerWidth <= 768;
  };

  const [lastFilter, setLastFilter] = useState(null);

  //const [selectedFilter, setSelectedFilter] = useState("portrait");
  const [selectedFilter, setSelectedFilter] = useState(
    isMobileView() ? null : "portrait"
  );

  const [cssMobile, setCssMobile] = useState(true);
  const [photoPackage, setphotoPackage] = useState("--Választás--");

  //ADMIN Page

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [folderImages, setFolderImages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  const [fileError, setFileError] = useState(null);
  const [folderError, setFolderError] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Kép mérete
  const [imageSize, setImageSize] = useState(null);
  const [resizeSuccess, setResizeSuccess] = useState(false);
  const [imageResized, setImageResized] = useState(false);
  const [showWarningImageSize, setShowWarningImageSize] = useState(false);

  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [isOpenResize, setIsOpenResize] = useState(window.innerWidth >= 768);

  //Kép feltöltés visszajelzés
  const [uploadSuccess, setUploadSuccess] = useState(false);
  //Kép törlés visszajelzés
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  //Mobilnézet
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  function resetButton() {
    // Beállítja a resizeSuccess állapotot false-ra a kép feltöltése után
    setResizeSuccess(false);
    // Visszaállítja a selectedFile állapotot null-ra a kép feltöltése után
    setSelectedFile(null);
    // Visszaállítja az imageResized állapotot false-ra a kép feltöltése után
    setImageResized(false);
    // Visszaállítja az inputValue állapotot null-ra a kép feltöltése után
    setInputValue("");
    setImageSize(null);
    setImagePreview(null);
    setShowWarningImageSize(false);
    // Törli a képeket az imageGrid-ből
    setFolderImages([]);
    // Alapértelmezett értékre állítja a select-et
    setSelectedFolder("");
    setIsOpenResize(false);
  }

  function resetImageUploader() {
    // Beállítja a resizeSuccess állapotot false-ra a kép feltöltése után
    setResizeSuccess(false);
    // Visszaállítja a selectedFile állapotot null-ra a kép feltöltése után
    setSelectedFile(null);
    // Visszaállítja az imageResized állapotot false-ra a kép feltöltése után
    setImageResized(false);
    // Visszaállítja az inputValue állapotot null-ra a kép feltöltése után
    setInputValue("");
    setImageSize(null);
    setImagePreview(null);
    setShowWarningImageSize(false);
    setIsOpenResize(false);
  }

  //ADMIN Page

  const cartContext = {
    cssMobile: cssMobile,
    setCssMobile: setCssMobile,
    photoPackage: photoPackage,
    setphotoPackage: setphotoPackage,
    selectedFilter: selectedFilter,
    setSelectedFilter: setSelectedFilter,
    lastFilter: lastFilter,
    setLastFilter: setLastFilter,
    selectedFile: selectedFile,
    setSelectedFile: setSelectedFile,
    selectedFolder: selectedFolder,
    setSelectedFolder: setSelectedFolder,
    folderImages: folderImages,
    setFolderImages: setFolderImages,
    inputValue: inputValue,
    setInputValue: setInputValue,
    imagePreview: imagePreview,
    setImagePreview: setImagePreview,
    isModalOpen: isModalOpen,
    setIsModalOpen: setIsModalOpen,
    imageToDelete: imageToDelete,
    setImageToDelete: setImageToDelete,
    fileError: fileError,
    setFileError: setFileError,
    folderError: folderError,
    setFolderError: setFolderError,
    isDarkMode: isDarkMode,
    setIsDarkMode: setIsDarkMode,
    imageSize: imageSize,
    setImageSize: setImageSize,
    resizeSuccess: resizeSuccess,
    setResizeSuccess: setResizeSuccess,
    imageResized: imageResized,
    setImageResized: setImageResized,
    resetButton: resetButton,
    resetImageUploader: resetImageUploader,
    showWarningImageSize: showWarningImageSize,
    setShowWarningImageSize: setShowWarningImageSize,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    isOpenResize: isOpenResize,
    setIsOpenResize: setIsOpenResize,
    uploadSuccess: uploadSuccess,
    setUploadSuccess: setUploadSuccess,
    deleteSuccess: deleteSuccess,
    setDeleteSuccess: setDeleteSuccess,
    isMobile: isMobile,
    setIsMobile: setIsMobile,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
