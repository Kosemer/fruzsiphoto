import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import classes from './PhotoGallery.module.css';

const PhotoGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    event.stopPropagation();
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={classes.container}>
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={(event) => closeLightbox(event)}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((image) => ({
                ...image,
                srcset: image.srcSet,
                caption: image.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;
