import React, { useContext } from "react";
import axios from "axios";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import CartContext from "../../Components/Store/cart-context";

const DeleteImage = ({ loadImages }) => {
  const cartCtx = useContext(CartContext);

  const handleDeleteConfirmed = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "DELETE",
      url: "/backend/deleteImage.php",
      data: `image=${cartCtx.imageToDelete}`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    console.log(response.data);
    console.log(cartCtx.imageToDelete);
    cartCtx.setDeleteSuccess(true);
    setTimeout(() => {
      cartCtx.setDeleteSuccess(false);
    }, 2000);
    await loadImages();
    cartCtx.setIsModalOpen(false);
  };

  return (
    <ConfirmDeleteModal
      isOpen={cartCtx.isModalOpen}
      onClose={() => cartCtx.setIsModalOpen(false)}
      onDelete={handleDeleteConfirmed}
      isDarkMode={cartCtx.isDarkMode}
    />
  );
};

export default DeleteImage;
